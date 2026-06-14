<?php

namespace App\Filament\Resources\Trees\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class TreeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('tree_category_id')
                    ->relationship('category', 'name')
                    ->required()
                    ->searchable()
                    ->preload(),
                Select::make('species_id')
                    ->relationship('species', 'name')
                    ->searchable()
                    ->preload(),
                TextInput::make('common_name')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn (Set $set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('botanical_name'),
                TextInput::make('slug')
                    ->required(),
                Textarea::make('short_description')
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->columnSpanFull(),
                SpatieMediaLibraryFileUpload::make('images')
                    ->collection('images')
                    ->multiple()
                    ->reorderable()
                    ->appendFiles()
                    ->panelLayout('grid')
                    ->columnSpanFull(),
                TextInput::make('mature_height'),
                TextInput::make('mature_width'),
                Select::make('growth_rate')
                    ->options(['slow' => 'Slow', 'medium' => 'Medium', 'fast' => 'Fast']),
                Select::make('water_requirement')
                    ->options(['low' => 'Low', 'medium' => 'Medium', 'high' => 'High']),
                Select::make('frost_tolerance')
                    ->options(['low' => 'Low', 'medium' => 'Medium', 'high' => 'High']),
                Select::make('drought_tolerance')
                    ->options(['low' => 'Low', 'medium' => 'Medium', 'high' => 'High']),
                TextInput::make('flower_colour'),
                TextInput::make('flowering_season'),
                Toggle::make('is_evergreen')
                    ->required(),
                Toggle::make('is_indigenous')
                    ->required(),
                Toggle::make('is_featured')
                    ->required(),
                Toggle::make('is_active')
                    ->required(),
                TextInput::make('meta_title'),
                Textarea::make('meta_description')
                    ->columnSpanFull(),
            ]);
    }
}
