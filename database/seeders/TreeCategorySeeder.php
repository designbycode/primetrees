<?php

namespace Database\Seeders;

use App\Models\TreeCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TreeCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Indigenous Trees',
                'description' => 'Native South African trees suitable for local landscapes.',
                'sort_order' => 1,
            ],
            [
                'name' => 'Evergreen Trees',
                'description' => 'Trees that retain their foliage throughout the year.',
                'sort_order' => 2,
            ],
            [
                'name' => 'Deciduous Trees',
                'description' => 'Trees that shed their leaves seasonally.',
                'sort_order' => 3,
            ],
            [
                'name' => 'Flowering Trees',
                'description' => 'Trees valued for their attractive flowers.',
                'sort_order' => 4,
            ],
            [
                'name' => 'Exotic Trees',
                'description' => 'Non-native ornamental and landscape trees.',
                'sort_order' => 5,
            ],
        ];

        foreach ($categories as $category) {
            TreeCategory::updateOrCreate(
                ['slug' => Str::slug($category['name'])],
                [
                    'name' => $category['name'],
                    'slug' => Str::slug($category['name']),
                    'description' => $category['description'],
                    'sort_order' => $category['sort_order'],
                    'is_active' => true,
                ]
            );
        }
    }
}
