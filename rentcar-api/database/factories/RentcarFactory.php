<?php

namespace Database\Factories;

use App\Models\Rentcar;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Provider\Fakecar;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rentcar>
 */
class RentcarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Rentcar::class;
    public function definition(): array
    {
        $this->faker->addProvider(new Fakecar($this->faker));
        $vehicle = $this->faker->vehicleArray();

        return [
            'car_name' => $this->faker->vehicle,
            'merk' => $this->faker->vehicleBrand,
            'price' => $this->faker->numberBetween(100000, 500000),
            'type' => $this->faker->randomElement(["Manual", "Automatic"]),
            'color' =>  $this->faker->hexColor(),
            'status' => $this->faker->randomElement(["Available", "Booked"]),
        ];
    }
}
