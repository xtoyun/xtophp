<?php
Route::group('v1',function (){
    Route::resource('manager','@admin/manager'); 
});