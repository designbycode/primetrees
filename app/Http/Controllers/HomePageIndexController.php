<?php

namespace App\Http\Controllers;

use App\Models\TreeCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(TreeCategory $treeCategory)
    {

        return Inertia::render('home', [
            'treeCategories' => $treeCategory->with('trees.media', 'trees.stock', 'trees.species')->isActive()->get(),
        ]);
    }
}
