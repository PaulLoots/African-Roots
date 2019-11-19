<?php

namespace App\Http\Controllers;
use App\Meal;
use Illuminate\Http\Request;

class MealController extends Controller
{
    public function index()
    {
        return Meal::all();
        return parent::formatResponse($meals, true, 200);
    }
    public function store(Request $request)
    {
        $meals = Meal::create($request->all());
        return response()->json($meals);
    }
}
