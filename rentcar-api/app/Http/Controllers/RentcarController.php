<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRentCarRequest;
use App\Models\Rentcar;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Stmt\TryCatch;

class RentcarController extends Controller
{
    // complete
    public function index(Request $request)
    {
        $limit = $request->input('limit', 20); // set a default limit of 10
        $datas = Rentcar::paginate($limit);

        if (count($datas) > 0) {
            return response()->json([
                "status" => 200,
                "message" => "success",
                "datas" => $datas,
                "length" => count($datas),
            ], 200);
        } else {
            return response()->json([
                "status" => 200,
                "message" => "success",
                "datas" => "empty data",
            ], 200);
        }
    }

    // complete
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'car_name' => 'required|string',
            'merk' => 'required|string',
            'image' => 'required|image',
            'price' => 'required|integer',
            'type' => 'required',
            'color' => 'required|string',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $image = $request->file('image')->store('/public/rentcar-images');
        $data = [
            'car_name' => $request->car_name,
            'merk' => $request->merk,
            'image' => $image,
            'price' => $request->price,
            'type' => $request->type,
            'color' => $request->color,
            'status' => $request->status,
        ];

        Rentcar::create($data);

        return response()->json([
            'status' => 201,
            'message' => 'Success',
            'data' => $data
        ], 201);
    }

    // complete
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
        try {
            $image = $rentcar->image;

            if ($request->hasFile('image')) {
                Storage::delete($rentcar->image);
                $image = $request->file('image')->store('/public/rentcar-images');
            }

            $rentcar->car_name = $request->input('car_name');
            $rentcar->merk = $request->input('merk');
            $rentcar->image = $image;
            $rentcar->price = $request->input('price');
            $rentcar->type = $request->input('type');
            $rentcar->color = $request->input('color');
            $rentcar->status = $request->input('status');
            $rentcar->save();

            return response()->json([
                "status" => 202,
                "message" => "Update successfully",
                "data" => $rentcar,
            ]);
        } catch (ModelNotFoundException $exception) {
            return response()->json([
                "status" => 404,
                "message" => "Data not found",
            ]);
        }
    }

    // complete
    public function destroy(Rentcar $rentcar)
    {
        if ($rentcar->image) {
            Storage::delete($rentcar->image);
        }

        $rentcar->delete();
        return response()->json([
            "status" => 200,
            "message" => "delete successful.",
        ], 200);
    }
}