<?php

namespace App\Filament\Resources\Trees\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TreesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                SpatieMediaLibraryImageColumn::make('images')
                    ->collection('images')
                    ->stacked()
                    ->limit(3)
                    ->circular(),
                TextColumn::make('category.name')
                    ->label('Category')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('common_name')
                    ->searchable(),
                TextColumn::make('botanical_name')
                    ->searchable(),
                TextColumn::make('slug')
                    ->searchable(),
                TextColumn::make('mature_height')
                    ->searchable(),
                TextColumn::make('mature_width')
                    ->searchable(),
                TextColumn::make('growth_rate')
                    ->badge(),
                TextColumn::make('water_requirement')
                    ->badge(),
                TextColumn::make('frost_tolerance')
                    ->badge(),
                TextColumn::make('drought_tolerance')
                    ->badge(),
                TextColumn::make('flower_colour')
                    ->searchable(),
                TextColumn::make('flowering_season')
                    ->searchable(),
                IconColumn::make('is_evergreen')
                    ->boolean(),
                IconColumn::make('is_indigenous')
                    ->boolean(),
                IconColumn::make('is_featured')
                    ->boolean(),
                IconColumn::make('is_active')
                    ->boolean(),
                TextColumn::make('meta_title')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
