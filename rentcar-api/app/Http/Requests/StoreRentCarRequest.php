<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreRentCarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "car_name" => "required|string",
            "merk" => "required|string",
            "image" => "required|image",
            "price" => "required|integer",
            "type" => "required",
            "color" => "required|string",
            "status" => "required"
        ];
    }

    public function messages()
    {
        return [
            "required" => "The :attribute must be fill",
            "string" => "The :attribute must be text",
            "integer" => "The :attribute must be number",
            "image" => "Please input the image file",
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $response = [
            "status" => 422,
            "message" => "Input data failed",
            "errors" => $validator->errors(),
        ];
        throw new HttpResponseException(response()->json($response, 422));
    }
}