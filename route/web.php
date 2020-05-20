<?php


//Route::any('detail-:id','home/index');//Oauth 
Route::rule('web/article/detail-:id', 'article/detail'); 
Route::rule('web/article/list-:id', 'article/list');
Route::rule('web/article/index-:type', 'article/index');

Route::rule('web/product/detail-:id', 'product/detail'); 
Route::rule('web/product/list-:id', 'product/list');
Route::rule('web/product/index-:type', 'product/index');

Route::rule('web/sever/detail-:id', 'sever/detail');
Route::rule('web/sever/list-:id', 'sever/list');
Route::rule('web/sever/template-:id', 'sever/template');

Route::rule('web/about/index-:name', 'about/index');