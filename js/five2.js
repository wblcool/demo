// JavaScript Document
$(function(){
	$('.list li').mouseover(function(){
	$('.big ').css('display','block')
	     var showimg=$(this).children().attr('src').replace('.jpg','_big.jpg')
	     $('.big img').attr('src',showimg)	
			
		})
		$('.list').mouseleave(function(){
			$('.big ').css('display','none')
			
			})
	$('.list li').mousemove(function(e){
		$('.big img').offset(function(){
			var local=new Object();
			local.left=(e.pageX-$(this).width()-20>0)?(e.pageX-$(this).width()-20):(e.pageX+20);//如果不给鼠标设置一点距离,鼠标移动
			//到img盒子上的时候，触发了mouseleave事件，图片会一直闪烁
			local.top=(e.pageY-$(this).height()-20>0)?(e.pageY-$(this).height()-20):(e.pageY+20);
			return local;
			})	
		})
	
	
	})
	