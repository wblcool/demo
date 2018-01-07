// JavaScript Document
$(function(){

	var $imgA=$('#left .content ul li');
	var $mark=$('#left .mask');
	var $tool=$('#tools');
	var $restar=$('#tools .reset');
	var $open=$('#tools li:eq(0)');
	var $selectWrap=$('#right .search .selectWrap');//右侧选择眼镜类型选择框
	var $glass=$('#right .glassList ul li')//获取有眼镜图片的li元素
	var flag=false;//用来检测大图是否已经点开
	
	$imgA.click(function(){
		flag=true;
	    if(flag) {$('#right').css('opacity','1');}
		var $imgbig=$('<img/>');
	    var newsrc=$(this).children().attr('src').replace(/model/g,'big');
		$imgbig.attr('src',newsrc);
		$mark.append($imgbig);
		$('#modelBox').css('display','none')
		$mark.fadeIn(1000)
		$tool.animate({left:'400px',top:'-10px'},1500)
		})//点击照片显示大图
		
	$restar.click(function(){
		flag=false;
		$('#right').css('opacity','0.3');
		$tool.animate({left:'-80px',top:'-40px'},1500);
		$mark.fadeOut(1000,function(){
			$('#modelBox').css('display','block')
			})
		 $selectWrap.children('ul').slideUp(500);
		if($('.place')){$('.place').remove();}//去掉眼镜
		$glass.removeClass('current');
		})//重选
	
	$open.click(function(){
		var txt=$(this).text();
		if(txt=='收缩'){
				$(this).text('展开')
				$(this).parent().stop().animate({'height':'42px'},500);
				$(this).attr('class','close');
			}else{
				$(this).text('收缩')
				$(this).parent().stop().animate({'height':'173px'},500)
				$(this).attr('class','open');
				}
		})//工具栏
		
	$('.modelList .faceType .normal li').click(function(){
	
		var index=$(this).index();
		var $this=$(this);
	    var prop=$this.children().attr('data-type')
		var $act=$('.modelList .faceType .active');
		var $actul=$('.modelList .faceType .active ul');
		var dis=index*60;//方块left值
		$act.stop(true).animate({left:dis+'px'},1000)
		$actul.stop(true).animate({left:-dis+'px'},1000)//方块移动动画选择脸型		
			  if(prop=='*'){
				   $imgA.css('opacity','1')//选择全部
				  }
			  else{
				   $imgA.css('opacity','0.4')
				   setTimeout(function(){ var s= prop.split(',')
					for(var i=0;i<s.length;i++){
							   var b=s[i]-1;		
							   $('#left .content ul li:eq('+b+')').css('opacity','1');
							}},1000)
					  }       
	})//tab栏点击脸型选择相应脸型并出现相应动画
	
	$selectWrap.click(function(){
		    if(!flag) {alert('请先在左侧选择与你脸型相似的照片！')}
			else{
				  if($(this).children('ul').css('display')!='none'){
				      $(this).children('ul').slideUp(500);  
				  }else{
			          $(this).children('ul').slideDown(500);
			          $(this).siblings().children('ul').slideUp(300);
				  }
		    }
		})//每个选项下拉显示动画
	
	$selectWrap.find('a').click(function(){
		var type=$(this).text();
		$(this).closest('.selectWrap').children('a').text(type);
	})                                          //获取下拉框选择的文本
		
	$glass.click(function(){ 
	if(!flag) {
		          alert('请先在左侧选择与你脸型相似的照片！')
	}else{
				  $(this).addClass('current');
				  $(this).siblings().removeClass('current');
				  if($('.place')){$('.place').remove();}
				  
				  var $imgglass=$('<div><img/><div>');
				  var newsrc=$(this).children('img').attr('src').replace('jpg','png');
				  /*$imgglass.children().attr('src',newsrc);*/
				  $imgglass.css('background-image','url('+newsrc+')')
				  $imgglass.addClass('place');
				  $('#left').append($imgglass);//创建眼镜图片并添加
				  
				  var dL,dT;
				  var flag2=false;
				  $imgglass.mousedown(function(e){//眼镜移动
					  flag2=true;
					  $this=$(this);
					  if($this.setCapture){$this.setCapture(true)} //感觉没捕获成功
					  dL=e.pageX-$(this).offset().left;
					  dT=e.pageY-$(this).offset().top;//计算鼠标离眼镜左边界和上边界的距离
					  })
				  $imgglass.mousemove(function(e){
					  if(!flag2) return;
					  $(this).offset(function(index,oldvalue){
						  var local=new Object();
						  local.left=e.pageX-dL;
						  local.top=e.pageY-dT;
						  return local;
						  })
					  })	
					$imgglass.mouseup(function(e){
					  flag2=false;
					  if(this.releaseCapture){this.releaseCapture()}
					  e.cancelBubble = true;
					  })
	        }
	 })
})