<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rentcar extends Model
{
    use HasFactory;
    protected $fillable = ["car_name", "merk", "image", "price", "type", "color", "status"];
}
