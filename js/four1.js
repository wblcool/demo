// JavaScript Document
function showa(i){
				$('#box1 .count li:nth-child('+i+')').addClass('current');
			    $('#box1 .count li:nth-child('+i+')').siblings().removeClass('current');
				$('#box1 .list li:nth-child('+i+')').siblings().stop(true).fadeOut(1000);
				$('#box1 .list li:nth-child('+i+')').stop(true).fadeIn(1000);
				}//幻灯片的显示隐藏动画
$(function(){
		$('#nav ul li').mouseout(function(){
		    $(this).children('.btmnav').delay(3000).hide(0);	
			 });	
			 
	    $('#nav ul li').mouseover(function(){
		  var $btmnav= $(this).children('.btmnav')//获取当前应该显示的div对象
		  var $btmnavother=$(this).siblings().children('.btmnav');//获取除了显示以外其他的div对象
		  var $inde=$(this).index();//获取当前触发事件的li元素的相对位置
		  var flag=parseInt($btmnav.width())-(8-$inde)*110;
		  $btmnav.css({display:'block'});
	      $btmnavother.css({display:'none'});
		  if(flag>0){
			    $btmnav.css({right:0});
			   	$btmnav.children('em').css({right:(7-$inde)*108+80+'px'});//判断em的位置，如果div是靠右对齐则如此设置，否则离左边距为li元素的一般即可
			   }else{
			   	$btmnav.children('em').css({left:'54px'});
			   }
		});
	/*幻灯片*/	
		$('#box1 .count li').mouseover(function(){/*幻灯片自动播放*/	
			for(var i=0;i<$('#box1 .count li').length;i++){
					if($('#box1 .count li:eq('+i+')')[0].timer)
					 clearInterval($('#box1 .count li:eq('+i+')')[0].timer)
				}//清空定时器
			var $inde=$(this).index()+1;
			showa($inde);
								  /*$(this).addClass('current');
								  $(this).siblings().removeClass('current');
								  $('#box1 .list li:nth-child('+$inde+')').siblings().stop(true,true).fadeOut(1000);
								  $('#box1 .list li:nth-child('+$inde+')').stop(true,true).fadeIn(1000);		用函数替换前的代码	*/
			})	
			
			$('#box1 .count li').mouseout(function(){
				for(var i=0;i<$('#box1 .count li').length;i++){
		               if($('#box1 .count li:eq('+i+')')[0].timer)
		               clearInterval($('#box1 .count li:eq('+i+')')[0].timer)
	                   }
			    var $inde=$(this).index()+1;
		       $(this)[0].timer=setInterval(function(){
					  showa($inde);
					  if($inde>=5){$inde=1;}else{//匿名函数包装，否则用函数名的形式传递的参数无法周期性的改变，参数只会是初始值
						  $inde++;}						
						},2000)
				})
         $('#box1 .count li:eq(0)').mouseout()
			
})
