// JavaScript Document
//先算出dt 33px dd 29px，不用计算也可以
$(function(){
	var dl=document.getElementsByTagName('dl');
	var dth=$('#box dl dt')[0].offsetHeight;//获得dt的高度
	var ddh=document.getElementsByTagName('dd')[0].offsetHeight;//dd的高度
	var $dt= $('#box dl dt');
	
	for(var i=0;i<dl.length;i++){
	$('#box dl')[i].style.height=$('#box dl dt')[i].offsetHeight+'px'//测试一下[]中是变量能否转换成dom对象
	}

	  $dt.click(function(){
			  if($(this).parent().height()>dth){
				   $(this).removeClass('current')
				   $(this).parent().stop().animate({height:dth},1000)
				  }
			  else{
				   var dlh=($(this).parent().children('dd').length)*ddh+dth+'px';
				   $(this).parent().stop().animate({height:dlh},1000)
				   $(this).addClass('current')
			  }
		})
		
	  $('#open').click(function(){
			        $dt.click()
                if($(this).text()=='全部展开'){
					     $(this).text('收回')
					}		
				else{
					$(this).text('全部展开')
					}		 
			 })
	
	
	})