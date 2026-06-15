<?php

namespace App\Http\Controllers;

use App\Models\TreeCategory;
use Inertia\Inertia;

class TreesPageIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(TreeCategory $treeCategory)
    {
        return Inertia::render('trees/index', [
            'treeCategories' => $treeCategory->with('trees.media', 'trees.stock', 'trees.species')->isActive()->get(),
        ]);
    }
}
