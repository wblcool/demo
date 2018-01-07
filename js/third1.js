// JavaScript Document
$(function(){
	$('.compare input[type="button"]').click(function(){
		var first=$('.compare input[type="text"]').first().val();
		var second=$('.compare input[type="text"]').last().val();
		(first==''|| second=='')?alert('请输入数字'):alert(Math.max(first,second))
		})
	$('.str input[type="button"]').click(function(){
		($('.str input[type="text"]').val().length==2)?alert('bingo,是两位数'):alert($('.str input[type="text"]').val().length+'位数')		
		})
		
	
	setInterval(function(){ 
			
		var date=new Date();
		var datey=date.getFullYear();
		var datemo=date.getMonth();
		var dater=date.getDate();
		var datew=date.getDay();
		var dateh=date.getHours();
		var datem=date.getMinutes();
		var dates=date.getSeconds();
		var array1=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
	//alert(datey+'年'+(datemo+1)+'月'+dater+'日'+array1[datew]+dateh+'时'+datem+'分'+dates+'秒')
	
		var endtime= new Date('2018/1/20 12:00:00')
		var curtime=Date.now();
		var allseconds=(endtime-curtime)/1000;
		var allday=Math.floor(allseconds/60/60/24);
		var allhour=Math.floor(allseconds/60/60%24);
		var allminutes=Math.floor(allseconds/60%60);
		var allfree=Math.floor(allseconds%60);
		
				$('.time span:nth-child(1)').text(dateh);
				$('.time span:nth-child(2)').text(datem);
				$('.time span:nth-child(3)').text(dates);
				
				if(allseconds>0){
				$('.freetime span:nth-child(1)').text(allday);
				$('.freetime span:nth-child(2)').text(allhour);
				$('.freetime span:nth-child(3)').text(allminutes);
				$('.freetime span:nth-child(4)').text(allfree);
				}else{
						$('.freetime').text('活动已结束');
					}
		},2)
    
   
 
	})
	
