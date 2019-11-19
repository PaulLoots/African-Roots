<?php

use Illuminate\Database\Seeder;

class MealsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meals')->insert([
            'name' => 'Apple pancakes',
            'ingredient_id' => ['Flour', 'Sugar', 'Cinnamon', 'Soy milk', 'Apple', 'Coconut oil'],
            'price_id' =>  90,
            'rating' => 4.8,
            'category' => 'Breakfasts',
            'image' => 'apple-pancakes.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Baked peppers',
            'ingredient_id' => ['Sweet potato', 'Flour', 'Onion', 'Pepper', 'Cherry tomato', 'Coconut milk'],
            'price_id' =>  115,
            'rating' => 4.5,
            'category' => 'Light meals',
            'image' => 'baked-pepper.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Black bean and lentil curry',
            'ingredient_id' => ['Black bean', 'Lentil', 'Sweet potato', 'Onion', 'Tomato', 'Corn'],
            'price_id' =>  120,
            'rating' => 4.1,
            'category' => 'Light meals',
            'image' => 'black-bean-lentil-curry.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Blueberry smoothie',
            'ingredient_id' => ['Blueberry', 'Coconut milk'],
            'price_id' =>  65,
            'rating' => 4.3,
            'category' => 'Drinks',
            'image' => 'blueberry-smoothie.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Braaibroodjie',
            'ingredient_id' => ['Bread', 'Onion', 'Tomato', 'Vegan mayo', 'Sweet potato'],
            'price_id' =>  65,
            'rating' => 4.5,
            'category' => 'Light meals',
            'image' => 'braaibroodjie.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Bunny chow',
            'ingredient_id' => ['Butternut', 'Onion', 'Sweet potato', 'Chickpea', 'Coconut milk', 'Bread'],
            'price_id' =>  105,
            'rating' => 4.7, 
            'category' => 'Light meals',
            'image' => 'bunny-chow.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Butternut muffin',
            'ingredient_id' => ['Flour', 'Sugar', 'Cinnamon', 'Butternut'],
            'price_id' =>  60,
            'rating' => 4.6,
            'category' => 'Breakfassa',
            'image' => 'butternut-muffin.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Cappuccino',
            'ingredient_id' => ['Coffee', 'Almond milk', 'Sugar'],
            'price_id' =>  45,
            'rating' => 4.7,
            'category' => 'Drinks',
            'image' => 'cappuccino.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Creamy potato soup',
            'ingredient_id' => ['Potato', 'Onion', 'Carrot', 'Coconut milk', 'Olive oil'],
            'price_id' =>  85,
            'rating' => 4.9,
            'category' => 'Light meals',
            'image' => 'potato-soup.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Fresh fruit juices',
            'ingredient_id' => ['Apple', 'Mango'],
            'price_id' =>  30,
            'rating' => 4.5,
            'category' => 'Drinks',
            'image' => 'fruit-juice.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Koeksisters',
            'ingredient_id' => ['Sugar', 'Cinnamon', 'Flour'],
            'price_id' =>  55,
            'rating' => 4.9,
            'category' => 'Desserts',
            'image' => 'koeksisters.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Mango and berry smoothie',
            'ingredient_id' => ['Mango', 'Raspberry', 'Blueberry', 'Coconut milk'],
            'price_id' =>  65,
            'rating' => 4.2,
            'category' => 'Drinks',
            'image' => 'mango-berry-smoothie.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Melktert',
            'ingredient_id' => ['Flour', 'Coconut milk', 'Cashew', 'Cinnamon'],
            'price_id' =>  45,
            'rating' => 4.9,
            'category' => 'Desserts',
            'image' => 'melktert.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Mini meatless sausage rolls',
            'ingredient_id' => ['Flour', 'Spinach', 'Chickpea', 'Onion'],
            'price_id' =>  100,
            'rating' => 4.8,
            'category' => 'Light meals',
            'image' => 'mini-sausage-rolls.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Mushroom and spinach pizza',
            'ingredient_id' => ['Flour', 'Spinach', 'Mushroom', 'Olive oil', 'Almond'],
            'price_id' =>  120,
            'rating' => 4.9,
            'category' => 'Light meals',
            'image' => 'pizza.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Polenta fries',
            'ingredient_id' => ['Soy milk', 'Polenta', 'Olive oil', 'Tomato'],
            'price_id' =>  85,
            'rating' => 4.7,
            'category' => 'Light meals',
            'image' => 'polenta-fries.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Quinoa bowl',
            'ingredient_id' => ['Quinoa', 'Blueberry', 'Almond', 'Almond milk'],
            'price_id' =>  115,
            'rating' => 4.8,
            'category' => 'Breakfasts',
            'image' => 'quinoa-bowl.png'
        ]);
        DB::table('meals')->insert([
            'name' => 'Scones',
            'ingredient_id' => ['Flour', 'Vegan mayo', 'Soy milk', 'Raspberry'],
            'price_id' =>  75,
            'rating' => 4.5,
            'category' => 'Breakfasts',
            'image' => 'scones.png'
        ]);
    }
}
