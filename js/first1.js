// JavaScript Document
var canvas=document.getElementById("canvas");
var context=canvas.getContext('2d');
window.onload=function(){
  canvas.width=400;
  canvas.height=200;
  var $canvas=$(canvas);
	$('li:eq(0)').on('click',function(){
		   $canvas.stop(true).animate({width:"800",height:"200"},2000);
		   return false;
		})
	$('li:eq(1)').on('click',function(){
		   $canvas.stop(true).animate({width:"400",height:"600"},2000);
		    return false;
		})
	$('li:eq(2)').on('click',function(){
	        context.clearRect(0,0,400,200);
	        var R=Math.floor(Math.random() * 255);
	        var G=Math.floor(Math.random() * 255);
	        var B=Math.floor(Math.random() * 255);
		
		    context.fillStyle="rgb("+R+","+G+","+B+")";
		    context.fillRect(0,0,400,200);
			 return false;
		})
	$('li:eq(3)').click(function(){
		   if($canvas.css('display')=="none"){
			  $canvas.stop().slideDown(300);
			  $('li:eq(3)').children().text('隐藏');
			}
		   else{
			  $canvas.stop().slideUp(300)
			  $('li:eq(3)').children().text('显示');
			}	
			 return false;
		})
	$('li:eq(4)').on('click',function(){
		     if($canvas.css('display')=="none")
				$canvas.stop().css({display:'block',width:'400',height:'200'})
		            context.clearRect(0,0,400,200);
		            $canvas.stop().css({width:"400",height:"200"})
		            $('li:eq(3)').children().text('隐藏');  
					 return false; 
	    })
	}