<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rentcars', function (Blueprint $table) {
            $table->id();
            $table->string("car_name");
            $table->string("merk");
            $table->string('image');
            $table->integer("price");
            $table->enum("type", ["Manual", "Automatic"]);
            $table->string("color");
            $table->enum("status", ["Available", "Booked"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentcars');
    }
};
