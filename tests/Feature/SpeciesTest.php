<?php

use App\Filament\Resources\Species\SpeciesResource;
use App\Filament\Resources\Trees\TreeResource;
use App\Models\Species;
use App\Models\Tree;
use App\Models\TreeCategory;
use App\Models\User;

use function Pest\Laravel\actingAs;

test('a tree belongs to a species', function () {
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
        'common_name' => 'Elm',
        'slug' => 'elm',
        'is_active' => true,
    ]);

    expect($tree->species->id)->toBe($species->id);
    expect($species->trees->first()->id)->toBe($tree->id);
});

test('species filament resource can list species', function () {
    $user = User::factory()->create();

    $species = Species::factory()->create([
        'name' => 'American Elm',
        'slug' => 'american-elm',
    ]);

    actingAs($user)
        ->get(SpeciesResource::getUrl('index'))
        ->assertSuccessful();
});

test('tree filament resource can list trees with species column', function () {
    $user = User::factory()->create();

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
        'common_name' => 'Elm',
        'slug' => 'elm',
        'is_active' => true,
    ]);

    actingAs($user)
        ->get(TreeResource::getUrl('index'))
        ->assertSuccessful();
});
