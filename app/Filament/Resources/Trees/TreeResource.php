<?php

namespace App\Filament\Resources\Trees;

use App\Filament\Resources\Trees\Pages\CreateTree;
use App\Filament\Resources\Trees\Pages\EditTree;
use App\Filament\Resources\Trees\Pages\ListTrees;
use App\Filament\Resources\Trees\Schemas\TreeForm;
use App\Filament\Resources\Trees\Tables\TreesTable;
use App\Models\Tree;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TreeResource extends Resource
{
    protected static ?string $model = Tree::class;

    protected static \UnitEnum|string|null $navigationGroup = 'Tree Management';

    protected static ?int $navigationSort = 2;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'common_name';

    public static function form(Schema $schema): Schema
    {
        return TreeForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TreesTable::configure($table);
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
            'index' => ListTrees::route('/'),
            'create' => CreateTree::route('/create'),
            'edit' => EditTree::route('/{record}/edit'),
        ];
    }
}
