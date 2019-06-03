<?php

//Route::any('detail-:id','home/index');//Oauth 
Route::rule('web/article/detail-:id', 'article/detail');
Route::rule('web/article/index-:type', 'article/index');