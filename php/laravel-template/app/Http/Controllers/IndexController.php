<?php

namespace App\Http\Controllers;

use App\Http\Response;

class IndexController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function api()
    {
        return Response::buildSuccess(9527);
    }

}
