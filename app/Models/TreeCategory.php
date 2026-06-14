<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

#[Fillable(['name', 'slug', 'description', 'is_active', 'sort_order', 'meta_title', 'meta_description'])]
class TreeCategory extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $casts = [
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

    public function trees(): HasMany
    {
        return $this->hasMany(Tree::class);
    }
}
