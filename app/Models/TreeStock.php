<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


#[Fillable(['tree_id', 'container_size', 'quantity', 'price', 'is_available'])]
class TreeStock extends Model
{
    use HasFactory;


    protected $casts = [
        'is_available' => 'boolean',
        'price' => 'decimal:2',
    ];

    public function tree(): BelongsTo
    {
        return $this->belongsTo(Tree::class);
    }
}
