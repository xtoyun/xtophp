    var app = {
    login:function(sender,action,url){
        var index = layer.load(0, {
            shade: [0.2, '#fff'] //0.1透明度的白色背景 
        });
        var options = {
            url: action,
            type: 'post',
            async: false, //异步处理
            dataType: 'json',
            data: $("#" + sender.id).serialize(),
            success: function (data) {
                layer.closeAll('loading');
                if (data.success) {
                    location.href=url;
                    //if (typeof (data.url) != "undefined") {
                    //    location.href = data.url;
                    //}
                }
                layer.msg(data.msg);//如果不弹出层，直接显示信息
            },
            error: function (jqXHR, textStatus, errorThrown) {
                layer.closeAll('loading');
                /*弹出jqXHR对象的信息*/
                alert("失败：" + jqXHR.responseText);
            }
        };
        $.ajax(options);
        return false;
    },
    submit: function (sender, action, url, callback) {
        var index = layer.load(0, {
            shade: [0.2, '#fff'] //0.1透明度的白色背景 
        });

        var data=$("#" + sender.id).serialize();
        $.post(this._url+action, data, function (json) {
            if (typeof callback === "function") {
                layer.closeAll('loading');
                callback(json)
            } else { 
                if (json.success) {
                    if (typeof (url) != "undefined") {
                        location.href = url;
                    }
                }
                layer.msg(json.msg);//如果不弹出层，直接显示信息
                layer.closeAll('loading');
            }
        });
        return false;  
    },
    post: function (action,data,url,callback) {
        var index = layer.load(0, {
           shade: [0.2, '#fff'] //0.1透明度的白色背景 
        });
        $.post(this._url+action, data, function (json) {
            if (typeof callback === "function") {
                layer.closeAll('loading');
                callback(json)
            } else {
                layer.closeAll('loading');
                if (json.success == true) {
                    if (typeof (url) != "undefined") {
                        location.href = url;
                    }
                    else{
                        layer.msg(json.msg);
                    } 
                }
                else {
                    layer.msg(json.msg);
                }
            }
        }); 
        return false;
    },
    delete: function (id, action) {
        url=this._url + action;
        layer.confirm('确定要删除吗？', {
          btn: ['确定','取消'] //按钮
        }, function(){
            var data = {};
            data.id = id
            $.post(url, data, function (json) {
                if (json.success == true) {
                    $("#" + id).hide();
                    layer.msg("删除成功");
                }
                else {
                    layer.msg(json.msg);
                }
            });
        }, function(){
            
        });
    },
    create: function (data, action, callback) {
        $.post(this._url + action, data, function (json) {
            if (typeof callback === "function") {
                callback(json)
            } else {
                if (json.success == true) {
                    layer.msg("操作成功");
                }
                else {
                    layer.msg(json.msg);
                }
            }
        });
    },
    search: function (sender, url) {
        var para = $("#" + sender.id).serialize();
        location.href = url + "&" + para;
        return false;
    },
    _url: "/admin.php/admin/api/",
    init: function (module,url) {
        this._module = module; 
        this._url="/admin.php/"+module+"/api/";

        if (typeof (url) != "undefined") {
            this._url=url;
        } 
        return this;
    },
    show:function(url,title,width,height,showclose){
        layer.open({
          type: 2,
          title: title,
          shadeClose: showclose,
          shade: 0.8,
          area: [width, height],
          content: url
        }); 
    },
    url:function(url){
        location.href=url;
    }
}