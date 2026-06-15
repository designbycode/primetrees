<?php

use App\Models\Tree;
use App\Models\TreeCategory;
use Inertia\Testing\AssertableInertia as Assert;

test('trees index page renders successfully and displays categories', function () {
    $category = TreeCategory::create([
        'name' => 'Deciduous',
        'slug' => 'deciduous',
        'is_active' => true,
    ]);

    $tree = Tree::create([
        'tree_category_id' => $category->id,
        'common_name' => 'American Elm',
        'slug' => 'american-elm',
        'is_active' => true,
    ]);

    $response = $this->get(route('trees'));

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('trees/index')
        ->has('treeCategories', 1)
        ->where('treeCategories.0.name', 'Deciduous')
        ->where('treeCategories.0.trees.0.common_name', 'American Elm')
    );
});

test('tree show page renders successfully for an active tree', function () {
    $category = TreeCategory::create([
        'name' => 'Deciduous',
        'slug' => 'deciduous',
        'is_active' => true,
    ]);

    $tree = Tree::create([
        'tree_category_id' => $category->id,
        'common_name' => 'American Elm',
        'slug' => 'american-elm',
        'is_active' => true,
    ]);

    $response = $this->get(route('trees.show', ['tree' => $tree->slug]));

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('trees/show')
        ->where('tree.common_name', 'American Elm')
        ->where('tree.slug', 'american-elm')
    );
});

test('tree show page returns 404 for an inactive tree', function () {
    $category = TreeCategory::create([
        'name' => 'Deciduous',
        'slug' => 'deciduous',
        'is_active' => true,
    ]);

    $tree = Tree::create([
        'tree_category_id' => $category->id,
        'common_name' => 'American Elm',
        'slug' => 'american-elm',
        'is_active' => false,
    ]);

    $response = $this->get(route('trees.show', ['tree' => $tree->slug]));

    $response->assertStatus(404);
});
