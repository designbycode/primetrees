<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

#[Fillable(['tree_category_id', 'common_name', 'botanical_name', 'slug', 'short_description', 'description', 'mature_height', 'mature_width', 'growth_rate', 'water_requirement', 'frost_tolerance', 'drought_tolerance', 'flower_colour', 'flowering_season', 'is_evergreen', 'is_indigenous', 'is_featured', 'is_active', 'meta_title', 'meta_description'])]
class Tree extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $casts = [
        'is_evergreen' => 'boolean',
        'is_indigenous' => 'boolean',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')
            ->useDisk('public')
            ->useFallbackUrl('/images/tree-placeholder.png')
            ->useFallbackPath(public_path('images/tree-placeholder.png'));
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->fit(Fit::Crop, 320, 180)
            ->format('webp')
            ->quality(80);

        $this->addMediaConversion('card')
            ->fit(Fit::Crop, 640, 360)
            ->format('webp')
            ->quality(80);

        $this->addMediaConversion('large')
            ->fit(Fit::Crop, 1280, 720)
            ->format('webp')
            ->quality(85);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(TreeCategory::class, 'tree_category_id');
    }

    public function stock()
    {
        return $this->hasMany(TreeStock::class);
    }
}
