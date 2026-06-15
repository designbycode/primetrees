<?php

namespace App\Http\Controllers;

use App\Models\Tree;
use Inertia\Inertia;
use Inertia\Response;

class TreesShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Tree $tree): Response
    {
        if (! $tree->is_active) {
            abort(404);
        }

        $tree->load(['media', 'stock', 'species', 'category']);

        return Inertia::render('trees/show', [
            'tree' => $tree,
        ]);
    }
}
