<?php

use App\Models\Species;
use App\Models\Tree;
use App\Models\TreeCategory;
use App\Models\TreeStock;
use Inertia\Testing\AssertableInertia as Assert;

test('availability list page renders successfully and displays stock data', function () {
    $category = TreeCategory::create([
        'name' => 'Deciduous',
        'slug' => 'deciduous',
        'is_active' => true,
    ]);

    $species = Species::factory()->create([
        'name' => 'American Elm',
        'slug' => 'american-elm',
    ]);

    $tree = Tree::create([
        'tree_category_id' => $category->id,
        'species_id' => $species->id,
        'common_name' => 'American Elm Tree',
        'slug' => 'american-elm-tree',
        'is_active' => true,
    ]);

    $stock = TreeStock::create([
        'tree_id' => $tree->id,
        'container_size' => '300mm',
        'quantity' => 123,
        'price' => 1500.00,
        'is_available' => true,
    ]);

    $response = $this->get(route('availability-list'));

    $response->assertStatus(200);

    $response->assertInertia(fn (Assert $page) => $page
        ->component('availability-list')
        ->has('stocks', 1)
        ->where('stocks.0.tree.common_name', 'American Elm Tree')
        ->where('stocks.0.tree.species.name', 'American Elm')
        ->where('stocks.0.container_size', '300mm')
        ->where('stocks.0.quantity', 123)
    );
});
