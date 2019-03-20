<?php

Route::any('accesstoken','api/auth/accessToken');//Oauth 

 
Route::group('v1',function (){
    Route::resource('user','@data/User'); 
});