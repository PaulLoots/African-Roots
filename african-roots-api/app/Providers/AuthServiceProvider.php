<?php

namespace App\Providers;
use Carbon\Carbon;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;
class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    // Token Lifetimes
// By default, Passport issues long-lived access tokens that never need to be refreshed. If you would like to configure a shorter token lifetime, you may use the tokensExpireIn and refreshTokensExpireIn methods. These methods should be called from the boot method of your AuthServiceProvider
    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();
        Passport::tokensExpireIn(Carbon::now()->addDays(5));
        Passport::refreshTokensExpireIn(Carbon::now()->addDays(3));
    }
}
