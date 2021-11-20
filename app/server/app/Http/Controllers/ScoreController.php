<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('auth:sanctum');
//    }

    public function index()
    {
        return Score::with('user')->orderByDesc('score')->get();
    }

    public function store(Request $request)
    {
        $userScore = Score::whereUserId($request->user['id'])->first();

        if ($userScore) {
            if ( intval($request->score) > intval($userScore->score) ) {
                $userScore->update([
                    'score' => $request->score
                ]);
            }
        } else {
            Score::create([
                'user_id' => $request->user['id'],
                'score' => $request->score
            ]);
        }

        return response()->json([]);
    }
}
