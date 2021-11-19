<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Log the user out of the application.
     *
     * @return void
     */
    public function store($type)
    {
        if ($type == 'current-session') {
            auth()->user()->currentAccessToken()->delete();
        } else if ($type == 'all-sessions') {
            auth()->user()->tokens()->delete();
        }
    }
}