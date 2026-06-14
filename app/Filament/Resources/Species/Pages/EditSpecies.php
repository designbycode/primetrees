<?php

namespace App\Filament\Resources\Species\Pages;

use App\Filament\Resources\Species\SpeciesResource;
use Filament\Resources\Pages\EditRecord;

class EditSpecies extends EditRecord
{
    protected static string $resource = SpeciesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //
        ];
    }
}
