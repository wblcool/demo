// JavaScript Document
$(function(){
	var flag=false;
	var boxleft=$('#box1').offset().left;
	var boxtop=$('#box1').offset().top;
	var pos=[{'x':boxleft,'y':boxtop}];
	$('#box1 h2').mousedown(function(e){
		 flag=true;
		 dL=e.pageX-$('#box1').offset().left;//点击的位置离盒子边缘的距离
		 dT=e.pageY-$('#box1').offset().top;
		$this=$(this);
		if($this.setCapture){$this.setCapture(true)} //感觉没捕获成功
		status();
		})
	
	$('#box1 h2').mousemove(function(e){
	if(!flag ) return ;
		var local=new Object()
		$('#box1').offset(function(){
			local.left=e.pageX-dL;
			local.top=e.pageY-dT;
			return local;
			});	
		pos.push({x:local.left,y:local.top})
		status()
		})
		
	$('#box1 h2 a').click(function(e){//要回访轨迹必须要把之前变量每一个都爆粗拿下来
	
		var timer=setInterval(function(){
			$('#box1').offset(function(){
			var path=new Object();
			path.left=pos.pop().x;
			path.top=pos.pop().y;
			return path;
			});	
			if(pos.length==0){
				clearInterval(timer)
				}
			 status()
			},20)
	e.stopPropagation()
		})
		
		
		
	$(document).on('mouseup blur',function(){
		flag=false;
      $this=$('#box1 h2')
		if($this.releaseCapture){$this.releaseCapture(true)}//感觉没用
		  status();
		})
	
	function status(){
	$('#box1 span:eq(0)').text(flag);
	$('#box1 span:eq(1)').text($('#box1').offset().left);
	$('#box1 span:eq(2)').text($('#box1').offset().top);
	}
})
