<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


#[Fillable(['tree_category_id', 'common_name', 'botanical_name', 'slug', 'short_description', 'description', 'mature_height', 'mature_width', 'growth_rate', 'water_requirement', 'frost_tolerance', 'drought_tolerance', 'flower_colour', 'flowering_season', 'is_evergreen', 'is_indigenous', 'is_featured', 'is_active', 'meta_title', 'meta_description'])]
class Tree extends Model
{
    use HasFactory;


    protected $casts = [
        'is_evergreen' => 'boolean',
        'is_indigenous' => 'boolean',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(TreeCategory::class, 'tree_category_id');
    }

    public function stock()
    {
        return $this->hasMany(TreeStock::class);
    }

}
