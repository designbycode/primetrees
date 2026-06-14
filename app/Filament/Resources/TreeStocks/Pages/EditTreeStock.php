<?php

namespace App\Filament\Resources\TreeStocks\Pages;

use App\Filament\Resources\TreeStocks\TreeStockResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTreeStock extends EditRecord
{
    protected static string $resource = TreeStockResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
