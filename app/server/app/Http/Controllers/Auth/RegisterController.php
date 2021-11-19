<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $user = User::whereUsername($request->username)->first();

        if (! $user) {
            return User::create([
                'username' => $request->username,
                'password' => bcrypt($request->password),
            ]);
        }

        return response()->json([
            'error' => 'Šāds lietotājvārds jau eksistē. Izvēlies citu.'
        ], 500);
    }
}
