<?php

Route::group('v1',function (){
    Route::resource('web/article','@web/article');
});