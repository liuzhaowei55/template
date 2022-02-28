<?php

namespace App\Http;

class Response
{
    public bool $success;
    public string $errCode;
    public string $errMessage;
    public mixed $data;

    private function __construct()
    {
    }

    public static function buildSuccess($data = null): \Illuminate\Http\JsonResponse
    {
        $response = new Response();
        $response->success = true;
        $response->errCode = '00000';
        $response->errMessage = 'OK';
        $response->data = $data;

        return response()->json($response);
    }

    public static function buildFailure(string $errCode, string $errMessage, $data = null): \Illuminate\Http\JsonResponse
    {
        $response = new Response();
        $response->success = false;
        $response->errCode = $errCode;
        $response->errMessage = $errMessage;
        $response->data = $data;

        return response()->json($response);
    }

}
