<?php
namespace app\admin\template;


class FormTemplate  extends \app\data\template\FormTemplate{
    public function addWeb_theme_select($name = '', $title = '', $tips = '', $options = [], $default = '', $category_template = '', $list_template = '', $show_template='')
    {
        $type = 'web_theme_select';

        $item = [
            'type'        => $type,
            'name'        => $name,
            'title'       => $title,
            'tips'        => $tips,
            'options'     => $options,
            'value'       => $default,
            'category_template' => $category_template,
            'list_template'  => $list_template,
            'show_template'  => $show_template,
        ]; 

        $this->setDataList('items',$item);
        return $this;
    }

    public function addSpecs($name = '', $title = '', $tips = '', $options = [], $default = ''){
        $type = 'specs';

        $item = [
            'type'        => $type,
            'name'        => $name,
            'title'       => $title,
            'tips'        => $tips,
            'options'     => $options,
            'value'       => $default
        ]; 

        $this->setDataList('items',$item);
        return $this;
    }
}