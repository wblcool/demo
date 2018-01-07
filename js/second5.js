// JavaScript Document
//jquery实现
/*$(function(){
	$('.imglist li').hover(function(){
		$(this).addClass('current');	
		},function(){$(this).removeClass('current');})
	$('#box li:not(.first) img').mouseenter(function(e){
       var $this=$(e.target).attr('src')//也可以用find(),区别是后代元素，注意可以用里面的选择器匹配单个或者多个子元素
		$('#box .first img').attr('src',$this)//e.target获取触发事件的元素，最好是最后代的元素，否则外容器也触发，导致获取的对象出现问题。可以用this的尽量用this
		})
	$(".outer li").hover(
	    function(){
		     $(this).addClass('current');
		      },
		function(){
			 $(this).removeClass('current');
			 })
	})*/
//javascript实现
window.onload=function(){
	var list=document.getElementsByClassName('imglist')[0].childNodes;
	      for(var i=0;i<list.length;i++){
				  list[i].onmouseover=function(){this.className="current"};//this.setAttribute('class','current')
				  list[i].onmouseout=function(){this.setAttribute('class','')};
		   }
		   
	var outer=document.getElementsByClassName('outer');
	var outerlist=outer[0].getElementsByTagName('li');
		  for(var i=0;i<outerlist.length;i++){
				  outerlist[i].onmouseover=function(){this.className="current"};//this.setAttribute('class','current')
				  outerlist[i].onmouseout=function(){this.setAttribute('class','')};
		  }
		  
	var boxul=document.getElementById('box');
	var box=boxul.getElementsByTagName('li');
	     for(var i=1;i<box.length;i++){            //获取的是img的属性值，不是li的属性值，子元素获取childNodes,firstChild,lastChild
			 box[i].onmouseover=function(){	
				 var first=this.firstChild.getAttribute('src');
				 box[0].childNodes[0].setAttribute('src',first); 			
                    } 
		  }
}
