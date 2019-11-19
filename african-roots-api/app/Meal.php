<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Meal extends Model
{
    protected $connection="mongodb";
    protected $table = 'meals';

    protected $fillable = [
        'name', 'price', 'rating'
    ];
    public function users()
    {
     return $this->hasMany(User::class);
    }
    public function inventory()
    {
     return $this->belongsToMany('App\Inventory');
    }
}
