<?php

//Route::any('detail-:id','home/index');//Oauth 
Route::rule('web/article/detail-:id', 'article/detail'); 
Route::rule('web/article/list-:id', 'article/list');
Route::rule('web/article/index-:type', 'article/index');

Route::rule('web/sever/detail-:id', 'sever/detail');
Route::rule('web/sever/list-:id', 'sever/list');