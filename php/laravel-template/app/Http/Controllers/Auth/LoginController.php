<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Reponsitory\UserRepository;
use App\Http\Response;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $rules = [
            'username' => ['required', 'string', 'min:3', 'max:30'],
            'password' => ['required', 'string', 'min:6']
        ];
        $data = $request->validate($rules);

        $user = $this->userRepository->findByUsername($data['username']);
        if (empty($user)) {
            return Response::buildFailure('A0000', '用户不存在');
        }

        return Response::buildSuccess();
    }

}
