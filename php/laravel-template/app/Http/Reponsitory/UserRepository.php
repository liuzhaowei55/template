<?php

namespace App\Http\Reponsitory;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class UserRepository
{
    public function findByUsername(string $username): Model|Builder|null
    {
        return User::query()->where('username', $username)->first();
    }

}
