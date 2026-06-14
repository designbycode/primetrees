<?php

namespace App\Filament\Resources\TreeStocks\Pages;

use App\Filament\Resources\TreeStocks\TreeStockResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTreeStocks extends ListRecords
{
    protected static string $resource = TreeStockResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
