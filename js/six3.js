// JavaScript Document
window.onload=function(){
	var menu=document.getElementById('menu');
	var Img=menu.getElementsByTagName('img');	
	var Imgwidth=[];
     for(var i=0;i<Img.length;i++){
		  Imgwidth.push(Img[i].offsetWidth);
		 Img[i].style.width=Img[i].offsetWidth*0.5+'px'
		 }
	menu.onmousemove=function(e){
		for(i=0;i<Img.length;i++){
		var a=e.clientX-Img[i].offsetLeft-Img[i].offsetWidth/2;
		var b=e.clientY-Img[i].offsetTop-menu.offsetTop-Img[i].offsetHeight/2;
		var scale;
			 scale = 1 - Math.sqrt(a * a + b * b) / 300;
			 if(scale<0.5){scale=0.5}			
	Img[i].style.width=Imgwidth[i]*scale+'px';
		}
	}
	
	//解锁效果
	var iphone=document.getElementById('iphone');
	var lock=document.getElementById('lock');
	var unlock=lock.getElementsByTagName('span');
	var flag=false;
	 
	 unlock[0].onmousedown=function(e){
		 clearInterval(unlock[0].timer)
		flag=true;
	    dis=e.clientX-iphone.offsetLeft-lock.offsetLeft-unlock[0].offsetLeft;
		if(this.setCapture){this.setCapture()}//感觉没啥用
		}
	unlock[0].onmousemove=function(e){
		if(!flag) {return};
		this.style.left=e.clientX-dis-iphone.offsetLeft-lock.offsetLeft+'px';
		
		if(this.offsetLeft>=265){
			this.style.left='265px'
			flag=false;
			iphone.style.background="url(../images/six3/2.jpg) no-repeat";
			lock.style.display='none';
			}else if(this.offsetLeft<=0)
			{this.style.left='0px'}
		 }
	unlock[0].onmouseup=function(){
		flag=false;
		if(unlock.releaseCapture){unlock.releaseCapture()}//感觉没啥用
		unlock[0].timer=setInterval(function(){
			if(unlock[0].offsetLeft<265&&unlock[0].offsetLeft>0){
				unlock[0].style.left=unlock[0].offsetLeft-1+'px'
				}else{
					clearInterval(timer)
					}		
			},2)
		}
}