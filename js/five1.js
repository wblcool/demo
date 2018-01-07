// JavaScript Document
$(function(){
	$('.select').click(function(){
		$('#search #sub').toggle()	
		})
	$('#search #sub li').click(function(){
		var txt=$(this).text();
		$('.select').text(txt);
		$('#search #sub').hide()	
		})
		//点击闪烁
	$('#box2')	.click(function(){
		var i=0;
		var timer=null;
		timer=setInterval(function(){
			if(i%2){
				$('#box2').hide()
				}
			else{ 
					$('#box2').show()
				}
			i++;
			if(i>100)clearInterval(timer);//三元操作符表示为  i++%2 ? $('#box2').css('display','none'): $('#box2').css('display','block')
			},80)	
		})
		
		
		
		//键盘控制div
		var bLeft = bTop = bRight = bBottom  = false;
		//如果直接根据按键检测，则无法使元素能够斜着移动，因此使用定时器检测每个取得的值，如果为真则移动否则不移动，并且相互冲突的
		//上下，左右写成互不影响的if语句
  setInterval(function(){
	  if(bLeft){
		     $('#box3').offset(function(index,oldvalue){
					var newpos=new Object()
					newpos.left=(oldvalue.left>0)?oldvalue.left-$(this).width()/10:0;
					newpos.top=oldvalue.top;
					return newpos;
					})  
		  } else if(bRight){
			  $('#box3').offset(function(index,oldvalue){
					var newpos=new Object();
					var maxright=$(window).width()-$(this).width()-10;
					newpos.left=(oldvalue.left<maxright)?oldvalue.left+$(this).width()/10:maxright;
					newpos.top=oldvalue.top;
					return newpos;
					})}
		if(bTop){
				$('#box3').offset(function(index,oldvalue){
					var newpos=new Object()
					newpos.left=oldvalue.left;
					newpos.top=(oldvalue.top>0)?oldvalue.top-$(this).height()/10:0;
					return newpos;})	
		  }else if(bBottom){
				$('#box3').offset(function(index,oldvalue){
					var newpos=new Object()
					var maxbottom=$(window).height()-$(this).height()-10;
					newpos.left=oldvalue.left;
					newpos.top=(oldvalue.top<maxbottom)?oldvalue.top+$(this).height()/10:maxbottom;
					return newpos;
					})}	  
	  },80)
	
		$(document).keydown(function(e){	    
			switch(e.which){
				case 37:                 //键盘向左键码
					bLeft =true;
					break;	
				case 38:                //键盘向上键码
					if(e.ctrlKey){
							var newwidth=$('#box3').width()*1.5;
							var newheight=$('#box3').height()*1.5;//获取变大后元素的宽和高
							var oldwidth=$('#box3').width();
							var oldheight=$('#box3').height();//获取变化前元素的宽和高
								$('#box3').css({'width':newwidth+'px',height:newheight+'px'});
								$('#box3').offset(function(index,oldvalue){
									var newpos=new Object()
									newpos.left=oldvalue.left-(newwidth-oldwidth)/2;
									newpos.top=oldvalue.top-(newheight-oldheight)/2;
									return newpos;})
							 break;	 }//放大
					bTop   = true;
					break;		
				case 39:                //键盘向右键码
					bRight   = true;
					break;	
				case 40:               //键盘向下键码
					if(e.ctrlKey){
							var newwidth=$('#box3').width()*0.5;
							var newheight=$('#box3').height()*0.5;//获取缩小后元素的宽和高
							var oldwidth=$('#box3').width();
							var oldheight=$('#box3').height();//获取缩小前元素的宽和高
							$('#box3').css({'width':newwidth+'px',height:newheight+'px'});
							$('#box3').offset(function(index,oldvalue){
								var newpos=new Object()
								newpos.left=oldvalue.left-(newwidth-oldwidth)/2;    
								newpos.top=oldvalue.top-(newheight-oldheight)/2;
								//负负得正
								return newpos;})
							 break;	 }//缩小
				      bBottom  = true;
					  break;
				case 49:	
					if(e.ctrlKey){
					$('#box3').css('background-color','green');}
					break;
				case 50:	
					if(e.ctrlKey){
					$('#box3').css('background-color','yellow');}
					break;
				case 51:	
					if(e.ctrlKey)				
				    $('#box3').css('background-color','blue');
				     break;}
			})
			$(document).keyup(function(e){
				switch(e.which){
					case 37:
					bLeft  = false;
					break;
					case 38:
					 bTop =false;
					 break;
					case 39:
					 bRight  = false;
					 break;
					case 40:
				 bBottom  = false;
					break;
					}
				})
	})
