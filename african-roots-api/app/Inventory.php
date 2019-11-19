<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Inventory extends Model
{
    protected $connection="mongodb";
    protected $table = 'inventory';
    protected $fillable = [
        'quantity', 'price'
    ];
    public function meals()
    {
        return $this->belongsToMany(Meal::class);
    }
}
