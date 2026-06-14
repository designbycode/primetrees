<?php

namespace App\Filament\Resources\Trees\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TreeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('tree_category_id')
                    ->required()
                    ->numeric(),
                TextInput::make('common_name')
                    ->required(),
                TextInput::make('botanical_name'),
                TextInput::make('slug')
                    ->required(),
                Textarea::make('short_description')
                    ->columnSpanFull(),
                Textarea::make('description')
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
