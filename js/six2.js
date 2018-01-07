// JavaScript Document
$(function(){
      $('#weibo form textarea').on('input propertychange',function(){
		  var _val=$(this).val();
		  var count;
		  if(_val.length<=100){
			  count=100-_val.length;
			  $('#count').text(count);
			  }
		  else{
			  $(this).val(_val.substr(0,100))
			  }
		  })//判定输入文字是否超标
		   $('#weibo form :input').focus(function(){$(this).css('border','1px solid #0FF')})
		    $('#weibo form :input').blur(function(){$(this).css('border-color','#d0d0d0')})
	  $('form p  a').click(function(){
		  $(this).addClass('current');
		  $(this).siblings().removeClass('current');
			}) 
	  $('#talk .delete').click(function(){
		  $(this).closest('li').detach();
		  })
		 $('#weibo ul li').hover(function(){
			 $(this).find('a[class*="delete"]').addClass('showa')},
			 function(){
			 $(this).find('a[class*="delete"]').removeClass('showa')
				 }) 
		
      $('#weibo form p input').click(function(){
		  $('#weibo #username').val()
		  if( $('#weibo #username').val()==''||$('#weibo #username').val().length<5){
			  alert('名字太短啦，需要至少5位'); return 
			  }
		 if( $('#weibo form textarea').val()==''){
			  alert('请输入你想说的话'); return 
			  }	  
	
		  //先获取选择的图片
		  var curtime=new Date();
		  var M=curtime.getMonth()+1;
		  var D=curtime.getDate();
		  var H=curtime.getHours();
		  var Min=curtime.getMinutes(); 
		  if(M<10){
			  M="0"+M;
			  }
		 var  spantext=M+"月"+D+"日"+H+":"+M;//获取当前的时间
		 
		  var source= $('form p  a[class*="current"]').children().attr('src');
		  var $Li=$('<li></li>');
		  var $div_1=$('<div class="head"><img/></div>');
		  var $div_2=$('<div class="content"><p><a href="javascript:;"></a></p><p></p><p><span class="timer"></span><a href="javascript:;"class="delete">删除</a></p></div>');//创建需要的节点
		  
		 $div_1.children().attr('src',source);
		 $div_2.find('p:nth-child(1) a').text( $('#username').val()+':');//把名字放进第一个p段落
		 $div_2.children('p:nth-child(2)').text($('#weibo form textarea').val())
		 $div_2.find('span').text(spantext)//给节点设置从表单中获取到的文字
		 $Li.append($div_1).append($div_2);
		 $('ul').append($Li);//创建的节点追加到ul中
	   //给新创建的元素绑定同样的事件
	      $('#talk .delete').click(function(){
		  $(this).closest('li').detach();
		  })
		 $('#weibo ul li').hover(function(){
			 $(this).find('a[class*="delete"]').addClass('showa')},
			 function(){
			 $(this).find('a[class*="delete"]').removeClass('showa')
				 }) 
	 
			
		  })
	})