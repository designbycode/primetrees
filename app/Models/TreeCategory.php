<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;


#[Fillable(['name', 'slug', 'description', 'is_active', 'sort_order', 'meta_title', 'meta_description'])]
class TreeCategory extends Model
{
    use HasFactory;

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function trees(): HasMany
    {
        return $this->hasMany(Tree::class);
    }
}
