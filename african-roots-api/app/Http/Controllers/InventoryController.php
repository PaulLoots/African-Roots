<?php

namespace App\Http\Controllers;
use App\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function index()
    {
        return Inventory::all();
            return parent::formatResponse($inventory, true, 200);
    }
    public function update(Request $request, $id)
    {
        $inventory = Inventory::find($id);
        if (!$inventory) {
            return response()->json([
                'success' => false,
                'message' => 'Inventory with id ' . $id . ' not found'
            ], 400);
        }

        $updated = $inventory->fill($request->all())->save();
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Inventory could not be updated'
            ], 500);
        }
}
