<?php

namespace App\Http\Controllers;

use App\Click;
use Illuminate\Http\Request;
use \Carbon\Carbon;

class ClickController extends Controller
{
    public function index()
    {
        $date_now = Carbon::now()->format('Y-m-d');
        $click = Click::where('created_at', $date_now)->first();
        return response()->json(['click_count'=>($click) ? $click->click_count : 0]);
    }

    public function clicked(Request $request)
    {
        $date_now = Carbon::now()->format('Y-m-d');
        $click = Click::where('created_at', $date_now)->first();
        if($click) {
            $click->increment('click_count');
            $response = $click;
        } else {
            $response = Click::create(['click_count'=>1,'created_at'=>$date_now]);
        }
        return response()->json($response);
    }
}
