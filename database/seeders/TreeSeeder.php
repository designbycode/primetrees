<?php

namespace Database\Seeders;

use App\Models\Tree;
use App\Models\TreeCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TreeSeeder extends Seeder
{
    public function run(): void
    {
        $indigenous = TreeCategory::where('slug', 'indigenous-trees')->first();

        $trees = [
            [
                'common_name' => 'Wild Olive',
                'botanical_name' => 'Olea europaea subsp. africana',
                'is_indigenous' => true,
                'is_evergreen' => true,
            ],
            [
                'common_name' => 'White Stinkwood',
                'botanical_name' => 'Celtis africana',
                'is_indigenous' => true,
            ],
            [
                'common_name' => 'Water Pear',
                'botanical_name' => 'Syzygium guineense',
                'is_indigenous' => true,
                'is_evergreen' => true,
            ],
            [
                'common_name' => 'Natal Mahogany',
                'botanical_name' => 'Trichilia emetica',
                'is_indigenous' => true,
                'is_evergreen' => true,
            ],
            [
                'common_name' => 'Outeniqua Yellowwood',
                'botanical_name' => 'Afrocarpus falcatus',
                'is_indigenous' => true,
                'is_evergreen' => true,
            ],
        ];

        foreach ($trees as $tree) {
            Tree::updateOrCreate(
                ['slug' => Str::slug($tree['common_name'])],
                [
                    'tree_category_id' => $indigenous->id,
                    'common_name' => $tree['common_name'],
                    'botanical_name' => $tree['botanical_name'],
                    'slug' => Str::slug($tree['common_name']),
                    'is_indigenous' => $tree['is_indigenous'],
                    'is_evergreen' => $tree['is_evergreen'] ?? false,
                    'is_active' => true,
                ]
            );
        }
    }
}
