<?php

namespace Database\Seeders;

use App\Models\Species;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SpeciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $speciesNames = [
            'Aloe thraskii',
            'Afrocarpus falcatus',
            'Aloe barberae',
            'Aloe ferox',
            'Araucaria heterophylla',
            'Avocado hass',
            'Bougainvillea',
            'Brachylaena discolor',
            'Carya illinoinensis Wichita',
            'Celtis sinensis',
            'Ceratonia siliqua',
            'Chorisa speciosa',
            'Cupressus sempervirens Stricta',
            'Ekebergia capensis',
            'Erythrina caffra',
            'Erythrina lysistemon',
            'Ficus natalensis',
            'Ficus rubiginosa',
            'Harpephyllum caffrum',
            'Heteropyxis natalensis',
            'Ilex mitis',
            'Jacaranda mimosifolia',
            'Juniperus chinensis',
            'Lagerstroemia indica',
            'Liquidambar styraciflua',
            'Nuxia floribunda',
            'Mangifera peach',
            'Olea europaea Frantoio',
            'Olea europaea subsp africana',
            'Platanus x acerifolia',
            'Philodendron selloum',
            'Populus simonii',
            'Prunus nigra',
            'Quercus suber',
            'Salix mucronata',
            'Schinus molle',
            'Sclerocarya birrea',
            'Searsia pendulina',
            'Sideroxylon inerme',
            'Spathodea campanulata',
            'Syzygium cordatum',
            'Syzygium guineense',
            'Tarchonanthus camphoratus',
            'Trichillia emetica',
            'Vachellia burkei',
            'Vachellia galpinii',
            'Vachellia karroo',
            'Vachellia sieberiana',
            'Vachellia xanthophloea',
            'Viburnum sinensis',
            'Viburnum tinus',
        ];

        foreach ($speciesNames as $name) {
            Species::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name]
            );
        }
    }
}
