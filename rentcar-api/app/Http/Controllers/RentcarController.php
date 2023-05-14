<?php

namespace App\Http\Controllers;

use App\Models\Rentcar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RentcarController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10); // set a default limit of 10
        $datas = Rentcar::paginate($limit);

        if (count($datas) > 0) {
            return response()->json([
                "status" => 200,
                "message" => "success",
                "datas" => $datas,
            ], 200);
        } else {
            return response()->json([
                "status" => 200,
                "message" => "success",
                "datas" => "empty data",
            ], 200);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "car_name" => "required|string|max:20",
            "merk" => "required|string|max:20",
            "price" => "required|integer",
            "type" => "required",
            "color" => "required",
            "status" => "required",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 422,
                "message" => "input data failed",
                "errors" => $validator->messages(),
            ], 422);
        } else {
            $rentCar = Rentcar::create([
                "car_name" => $request->car_name,
                "merk" => $request->merk,
                "price" => $request->price,
                "type" => $request->type,
                "color" => $request->color,
                "status" => $request->status,
            ]);

            return response()->json([
                "status" => 201,
                "message" => "success",
                "data" => $rentCar,
            ], 201);
        }
    }

    public function show(Rentcar $rentcar)
    {
        return response()->json([
            "status" => 200,
            "message" => "success",
            "data" => $rentcar
        ], 200);
    }

    public function update(Request $request, Rentcar $rentcar)
    {
        $validator = Validator::make($request->all(), [
            "car_name" => "required|string|max:20",
            "merk" => "required|string|max:20",
            "price" => "required|integer",
            "type" => "required",
            "color" => "required",
            "status" => "required",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 422,
                "message" => "input data failed",
                "errors" => $validator->messages(),
            ], 422);
        } else {
            $rentcar->update([
                "car_name" => $request->car_name,
                "merk" => $request->merk,
                "price" => $request->price,
                "type" => $request->type,
                "color" => $request->color,
                "status" => $request->status,
            ]);

            return response()->json([
                "status" => 200,
                "message" => "edit data success",
                "data" => $rentcar,
            ], 200);
        }
    }

    public function destroy(Rentcar $rentcar)
    {
        $rentcar->delete();
        return response()->json([
            "status" => 200,
            "message" => "deletion successful.",
        ], 200);
    }
}
