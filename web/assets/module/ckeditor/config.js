/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.image_previewText = '';
    //config.removeDialogTabs = 'image:advanced;image:Link';//隐藏超链接与高级选项
    //config.filebrowserImageUploadUrl = "/admin.php/admin/upload/ckeditor";//上传图片的地址
    config.removePlugins = 'html5audio,html5video,codesnippet';
    //config.removePlugins = 'html5audio';

    config.filebrowserImageUploadUrl = "/admin.php/admin/upload/ckeditor";
};
