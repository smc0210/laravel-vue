<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BladeController extends Controller
{
    public function indexBlade(Request $request)
    {
        return view('welcome');
    }
}
