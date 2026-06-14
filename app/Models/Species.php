<?php

namespace App\Models;

use Database\Factories\SpeciesFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['name', 'slug'])]
class Species extends Model
{
    /** @use HasFactory<SpeciesFactory> */
    use HasFactory;

    public function trees(): HasMany
    {
        return $this->hasMany(Tree::class);
    }
}
