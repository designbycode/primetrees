<?php

namespace App\Filament\Resources\TreeStocks;

use App\Filament\Resources\TreeStocks\Pages\CreateTreeStock;
use App\Filament\Resources\TreeStocks\Pages\EditTreeStock;
use App\Filament\Resources\TreeStocks\Pages\ListTreeStocks;
use App\Filament\Resources\TreeStocks\Schemas\TreeStockForm;
use App\Filament\Resources\TreeStocks\Tables\TreeStocksTable;
use App\Models\TreeStock;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TreeStockResource extends Resource
{
    protected static ?string $model = TreeStock::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return TreeStockForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TreeStocksTable::configure($table);
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
            'index' => ListTreeStocks::route('/'),
            'create' => CreateTreeStock::route('/create'),
            'edit' => EditTreeStock::route('/{record}/edit'),
        ];
    }
}
