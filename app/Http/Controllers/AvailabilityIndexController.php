<?php

namespace App\Http\Controllers;

use App\Models\TreeStock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AvailabilityIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $stocks = TreeStock::with(['tree.species'])->get();

        return Inertia::render('availability-list', [
            'stocks' => $stocks,
        ]);
    }
}
