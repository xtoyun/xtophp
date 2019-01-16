


			
			



			

//$(window).resize(function(){
//	location=location
//})
//导航点击
$('.dropdown').hover(function(){
	$(this).find('ul').css({display:'block'})
	$(this).css({border:'1px solid #eee'})
},function(){
	$(this).find('ul').css({display:'none'})
	$(this).css({border:'1px solid transparent'})
})
$('.dropdown').find('ul').find('li').hover(function(){
	$(this).css({background:'#eee'})
	$(this).find('a').css({color:'#00aeff'})
},function(){
	$(this).css({background:'#fff'})
	$(this).find('a').css({color:'#3a3a3a'})
})
//锚点链接平滑过渡
$('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset-92
                },
                1000);
                return false;
            }
        }
    });

//顶部加载条
QianLoad = {
    PageLoading: function(options) {
        var defaults = {
            delayTime: 500, //页面加载完成后，加载进度条淡出速度
            sleep: 0, //设置挂起,等于0时则无需挂起
        }
        var options = $.extend(defaults, options);
        //在页面未加载完毕之前显示的loading Html自定义内容
        $('head').append(defaults.css);
        var _LoadingHtml = '<div class="load-wrap"><div id="pre-load">' + '<span></span>' + '</div></div>';
        //呈现loading效果
        $("body").append(_LoadingHtml);
        //监听页面加载状态
        document.onreadystatechange = PageLoaded;
        function PageLoaded() {
            var loadingMask = $('#pre-load');
            $({
                property: 0
            }).animate({
                property: 98
            }, {
                duration: 1000,
                step: function() {
                    var percentage = Math.round(this.property);
                    loadingMask.css('width', percentage + "%");
                    //页面加载后执行
                    if (document.readyState == "complete") {
                        loadingMask.css('width', 100 + "%");
                        setTimeout(function() {
                                loadingMask.animate({
                                        "opacity": 0
                                    },
                                    options.delayTime,
                                    function() {
                                        $(this).remove();
                                    });
                            },
                            options.sleep);
                    }
                }
            });
        }
    }
}
QianLoad.PageLoading({
		    sleep: 10
		});

//关于我们
var k = 0;
var stop = false;
var a = setInterval(function(){
	if(stop){
		return
	}
	k++
	$('.about-slide').eq(k).addClass('active').siblings('.about-slide').removeClass('active')
	if(k==2){
		k= -1
	}
	
},2000)
$('.about-slide').hover(function(){
	$(this).addClass('active').siblings('.about-slide').removeClass('active')
	stop = true;
},function(){
	$(this).removeClass('active');
	stop = false;
	
})

var j = 0;
var stop1 = false;
var b = setInterval(function(){
	if(stop1){
		return
	}
	j++
	$('.adv_tabs').eq(j).addClass('active').siblings('.adv_tabs').removeClass('active')
	$('.va').eq(j).addClass('show').siblings('.va').removeClass('show')
	if(j==1){
		j=-1
	}
},2000)
$('.adv_tabs').hover(function(){
	$(this).addClass('active').siblings('.adv_tabs').removeClass('active')
	var num2 = $(this).index()
	$('.va').eq(num2).addClass('show').siblings('.va').removeClass('show')
	stop1 = true;
},function(){
	stop1 = false;
	
})

//我们的优势
$('.adv_tabs').click(function(){
	$(this).addClass('active').siblings('.adv_tabs').removeClass('active')
	var num = $(this).index()
	$('.va').eq(num).addClass('show').siblings().removeClass('show')
})


//动态数字

//案例

$('.case_img').hover(function(){
    $(this).find('img').css({display:'block' })
    $(this).find('div').css({display:'block' })
},function(){
    $(this).find('img').css({display:'none'})
    $(this).find('div').css({display:'none'})
})

$('.case-tab li').click(function(){
	$(this).addClass('active').siblings().removeClass('active')
	var num = $(this).index()
	$('.case-contain').eq(num).addClass('show').siblings('.case-contain').removeClass('show')
	
})



//客户案例页面
var _content = []; //临时存储li循环内容
		var jiazai = {
			_default:6, //默认显示图片个数
			_loading:6,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".case-contain1 .hidden li");
				$("http://www.we7shop.com/Public/static/index/js/.case-contain.show  ul.list").html("");
				for(var n=0;n<jiazai._default;n++){
					lis.eq(n).appendTo("http://www.we7shop.com/Public/static/index/js/.case-contain1  ul.list");
				}
				$(".case-contain1  ul.list img").each(function(){
					$(this).attr('src',$(this).attr('realSrc'));
				})
				for(var i=jiazai._default;i<lis.length;i++){
					_content.push(lis.eq(i));
				}
				// $(".case-contain1  .hidden").html("");
                $(".case-contain1  .hidden").css('display','none');
			},
			loadMore:function(){
				var mLis = $(".case-contain1  ul.list li").length;
				for(var i =0;i<jiazai._loading;i++){
					var target = _content.shift();
					if(!target){
						$('http://www.we7shop.com/Public/static/index/js/.case-contain1  .more').html("<p>全部加载完毕...</p>");
						break;
					}
					$("http://www.we7shop.com/Public/static/index/js/.case-contain1  ul.list").append(target);
					$(".case-contain1  ul.list img").eq(mLis+i).each(function(){
						$(this).attr('src',$(this).attr('realSrc'));
					});
				}
			}
		}

		jiazai.init();
		
		var _content1 = []; //临时存储li循环内容
		var jiazai1 = {
			_default:6, //默认显示图片个数
			_loading:6,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".case-contain2 .hidden li");
				$("http://www.we7shop.com/Public/static/index/js/.case-contain2  ul.list").html("");
				for(var n=0;n<jiazai1._default;n++){
					lis.eq(n).appendTo("http://www.we7shop.com/Public/static/index/js/.case-contain2  ul.list");
				}
				$(".case-contain2  ul.list img").each(function(){
					$(this).attr('src',$(this).attr('realSrc'));
				})
				for(var i=jiazai1._default;i<lis.length;i++){
					_content1.push(lis.eq(i));
				}
				$(".case-contain2  .hidden").html("");
			},
			loadMore:function(){
				var mLis = $(".case-contain2  ul.list li").length;
				for(var i =0;i<jiazai1._loading;i++){
					var target = _content1.shift();
					if(!target){
						$('http://www.we7shop.com/Public/static/index/js/.case-contain2  .more').html("<p>全部加载完毕...</p>");
						break;
					}
					$("http://www.we7shop.com/Public/static/index/js/.case-contain2  ul.list").append(target);
					$(".case-contain2  ul.list img").eq(mLis+i).each(function(){
						$(this).attr('src',$(this).attr('realSrc'));
					});
				}
			}
		}
		
		jiazai1.init();
		
		
		var _content2 = []; //临时存储li循环内容
		var jiazai2 = {
			_default:6, //默认显示图片个数
			_loading:6,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".plug-contain .hidden li");
				$("http://www.we7shop.com/Public/static/index/js/.plug-contain ul.list").html("");
				for(var n=0;n<jiazai2._default;n++){
					lis.eq(n).appendTo("http://www.we7shop.com/Public/static/index/js/.plug-contain ul.list");
				}
				$(".plug-contain ul.list img").each(function(){
					$(this).attr('src',$(this).attr('realSrc'));
				})
				for(var i=jiazai2._default;i<lis.length;i++){
					_content2.push(lis.eq(i));
				}
				$(".plug-contain .hidden").html("");
			},
			loadMore:function(){
				var mLis = $(".plug-contain ul.list li").length;
				for(var i =0;i<jiazai2._loading;i++){
					var target = _content2.shift();
					if(!target){
						$('http://www.we7shop.com/Public/static/index/js/.plug-contain .more').html("<p>全部加载完毕...</p>");
						break;
					}
					$("http://www.we7shop.com/Public/static/index/js/.plug-contain ul.list").append(target);
					$(".plug-contain ul.list img").eq(mLis+i).each(function(){
						$(this).attr('src',$(this).attr('realSrc'));
					});
				}
			}
		}
		
		jiazai2.init();
		
		// 
		
//		$('.aa').click(function(){
//			var category;
//			
//			// 其他的  隐藏
//			$(".more");
//		
//		})
//		
//		// 加载更多
//		$(".more").click(function(){
//			
//			var contain;
//			var contain_page = contain.data();
//			
//			
//		})


		$('http://www.we7shop.com/Public/static/index/js/.case-contain.show').find('ul').on('mouseover','li',function(){
			$(this).find('.case-intr').css({display:'none'})
			$(this).find('.qrcode').css({display:'block'})
		})
		$('http://www.we7shop.com/Public/static/index/js/.case-contain.show').find('ul').on('mouseout','li',function(){
			$(this).find('.case-intr').css({display:'block'})
			$(this).find('.qrcode').css({display:'none'})
		})
		$('http://www.we7shop.com/Public/static/index/js/.plug-contain.show').find('ul').on('mouseover','li',function(){
			$(this).find('.case-intr').css({display:'none'})
			$(this).find('.qrcode').css({display:'block'})
		})
		$('http://www.we7shop.com/Public/static/index/js/.plug-contain.show').find('ul').on('mouseout','li',function(){
			$(this).find('.case-intr').css({display:'block'})
			$(this).find('.qrcode').css({display:'none'})
		})
//特色功能
//导航
var h = window.innerHeight;
$(window).scroll(function(){
    if($(window).scrollTop()>510){
       $('.tab_nav').css({position:'fixed',bottom:h-92+'px'})
      }else{
      	$('.tab_nav').css({position:'absolute',bottom:'-40px'})
      }
   });


//插件tab切换
$('.pluggable-bottom').find('.tab').find('ul').find('li').click(function(){
	$(this).attr('class','active');
	$('.pluggable-bottom').find('.pluggable-contain').find('h3').eq($(this).attr('id')).attr('class','show').fadeIn();
	$('.pluggable-bottom').find('.pluggable-contain').find('.slide').eq($(this).attr('id')).attr('class','show slide').find('div').fadeIn();
	$('.pluggable-show').find('img').eq($(this).attr('id')).fadeIn(500).attr('class','show')
	$('.pluggable-show').find('img').eq($(this).attr('id')).siblings().fadeOut(10).attr('class','hidden')
	$('.pluggable-bottom').find('.pluggable-contain').find('.slide').eq($(this).attr('id')).siblings('.slide').attr('class','hidden slide').find('div').fadeOut();
	$(this).siblings().attr('class','')
	$('.pluggable-bottom').find('.pluggable-contain').find('h3').eq($(this).attr('id')).siblings('h3').attr('class','hidden').fadeOut();
})



//功能列表
//$('.edtions').hover(function(){
//	$(this).attr('class','light fl edtions')
//	$(this).siblings('.edtions').attr('class','fl edtions')
//})

//关于我们页面
$('.events-contain').find('ul').find('li').hover(function(){
	$(this).find('.date').find('.month').css({background:'#0baefd',color:'#fff'})
	$(this).find('.date').find('.day').css({background:'#fff',color:'#0baefd'})
	$(this).find('dl').find('dt').find('h3').find('span').css({background:'#0baefd'})
},function(){
	$(this).find('.date').find('.month').css({background:'#e4e4e4',color:'#989898'})
	$(this).find('.date').find('.day').css({background:'#fff',color:'#989898'})
	$(this).find('dl').find('dt').find('h3').find('span').css({background:'#9d9d9d'})
})
