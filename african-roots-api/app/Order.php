<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Order extends Model
{
    protected $connection="mongodb";
    protected $table = 'orders';

    protected $fillable = [
        'user_id', 'user_name', 'meal_id', 'order_number', 'order_status','customer_notes'
    ];
}
