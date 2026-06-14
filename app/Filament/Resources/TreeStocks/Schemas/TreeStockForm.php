<?php

namespace App\Filament\Resources\TreeStocks\Schemas;

use App\Models\TreeStock;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Builder;

class TreeStockForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('tree_id')
                    ->relationship(
                        name: 'tree',
                        titleAttribute: 'common_name',
                        modifyQueryUsing: fn (Builder $query, ?TreeStock $record) => $query
                            ->whereDoesntHave('stock', fn (Builder $query) => $record ? $query->where('id', '!=', $record->id) : $query)
                    )
                    ->required()
                    ->searchable()
                    ->preload(),
                TextInput::make('container_size')
                    ->required(),
                TextInput::make('quantity')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('price')
                    ->numeric()
                    ->prefix('R'),
                Toggle::make('is_available')
                    ->required()
                    ->default(true),
            ]);
    }
}
