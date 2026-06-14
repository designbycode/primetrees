<?php

namespace App\Filament\Resources\TreeCategories\Pages;

use App\Filament\Resources\TreeCategories\TreeCategoryResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTreeCategory extends EditRecord
{
    protected static string $resource = TreeCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
