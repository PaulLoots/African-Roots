<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->interger('order_number');
            $table->string('order_status');
            $table->string('customer_notes');
            $table->interger('user_id')->unasigned();
            $table->string('user_name');
            $table->interger('meal_id')->unsigned();
            $table->timestamps();
            // $table->foreign('user_id')->references('id')->on('users' );
            // $table->foreign('meal_id')->references('id')->on('meals');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
