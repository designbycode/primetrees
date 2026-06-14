<?php

namespace App\Filament\Resources\TreeCategories\Pages;

use App\Filament\Resources\TreeCategories\TreeCategoryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTreeCategories extends ListRecords
{
    protected static string $resource = TreeCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
