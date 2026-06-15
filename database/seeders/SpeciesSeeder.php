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
            'Afrocarpus falcatus',
            'Aloe barberae',
            'Aloe masada',
            'Aloe ferox',
            'Aloe thraskii',
            'Bougainvillea',
            'Brachylaena discolor',
            'Celtis sinensis',
            'Ceratonia siliqua',
            'Chorisa speciosa',
            'Citrus limon Eureka',
            'Cupressus sempervirens Stricta',
            'Cupressus x leylandii',
            'Combretum kraussii',
            'Delonix regia',
            'Ekebergia capensis',
            'Erythrina caffra',
            'Ficus natalensis',
            'Ficus rubiginosa',
            'Jacaranda mimosifolia',
            'Harpephyllum caffrum',
            'Juniperus chinensis',
            'Lagerstroemia indica',
            'Liquidambar styraciflua',
            'Mangifera peach',
            'Nuxia floribunda',
            'Olea europaea Frantoio',
            'Olea europaea Mission',
            'Olea europaea subsp africana',
            'Platanus x acerifolia',
            'Plumeria rubra',
            'Populus simonii',
            'Quercus robur',
            'Quercus suber',
            'Sclerocarya birrea',
            'Sideroxylon inerme',
            'Syzygium cordatum',
            'Syzygium paniculatum',
            'Syzygium guineense',
            'Trichilia emetica',
            'Vachellia galpinii',
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
