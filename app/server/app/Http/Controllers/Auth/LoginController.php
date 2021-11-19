<?php

namespace App\Http\Controllers\Auth;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        try {
            $credentials = request(['username', 'password']);

            if (!$this->attemptLogin($credentials)) {
                return response()->json([
                    'error' => 'Nepareizs lietotājvārds vai parole.'
                ], 401);
            };

            $user = User::whereUsername($request->username)->first();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token'  => $token,
                'user'          => $user,
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'error' => 'Ak vai! Kaut kas nav labi, nesanāca ieiet!'
            ], 500);
        }
    }

    private function attemptLogin($credentials): bool
    {
        if (!Auth::attempt($credentials)) {
            return false;
        }

        return true;
    }
}
