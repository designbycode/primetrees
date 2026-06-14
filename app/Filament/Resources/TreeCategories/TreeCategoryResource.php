<?php

namespace App\Filament\Resources\TreeCategories;

use App\Filament\Resources\TreeCategories\Pages\CreateTreeCategory;
use App\Filament\Resources\TreeCategories\Pages\EditTreeCategory;
use App\Filament\Resources\TreeCategories\Pages\ListTreeCategories;
use App\Filament\Resources\TreeCategories\Schemas\TreeCategoryForm;
use App\Filament\Resources\TreeCategories\Tables\TreeCategoriesTable;
use App\Models\TreeCategory;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TreeCategoryResource extends Resource
{
    protected static ?string $model = TreeCategory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return TreeCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TreeCategoriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListTreeCategories::route('/'),
            'create' => CreateTreeCategory::route('/create'),
            'edit' => EditTreeCategory::route('/{record}/edit'),
        ];
    }
}
