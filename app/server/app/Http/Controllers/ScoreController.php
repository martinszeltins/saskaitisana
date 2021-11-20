<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function store(Request $request)
    {
        return Score::updateOrCreate(
            [ 'user_id' => $request->user['id'] ],
            [ 'score' => $request->score ]
        );
    }
}
