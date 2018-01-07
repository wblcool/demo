// JavaScript Document
$(function(){
	$('.tab li').mouseenter(function(){
		$(this).addClass('current')
		          .siblings().removeClass('current')
		          var ind=parseInt($(this).index())+1;//获取触发事件元素的相对位置
		$('.content ul:nth-child('+ind+')').css('display','block')//注意nth-child()传入参数要进行字符串拼接，否则传入的不是变量
		                                                  .siblings().css('display','none')
		})
		//全选框设置
     var judge=function(){//定义函数判断是否处于全选状态并赋相应值给单选框和label
			var flag=true; 
			$('[name=item]:checkbox').each(function(){
						if($(this).prop('checked')!=true)//通过遍历判断每个选框的值，如果有值为flase则表示不全选，也可以筛选选中的个数和总个数是否相等来判断
								flag=false;
						$('#checkall').prop('checked',flag)
						  })
			if($('#checkall').prop('checked')){
								 $('dl dt label').text('全不选')}
			else{
								 $('dl dt label').text('全选')
						}
	   }
	$('#checkall').click(function(){
		    $('dd input').prop('checked',$(this).prop('checked'));
	        if($('#checkall').prop('checked')){
		            $('dl dt label').text('全不选')}
		    else{
			        $('dl dt label').text('全选')
			}
		})
		
	$('[name=item]:checkbox').click(judge)//给每个单选框绑定此判断函数决定全选框的值
			//反选
	$('dl dt a').click(function(){
		$('input:checkbox').each(function(){
			$(this).prop('checked',!$(this).prop('checked'))
			})//取相反值
		 judge();
		})		
	})
         var arry1=[
        "元旦：1月1日至3日放假三天。",
		"春节：2月2日至8日放假7天。",
		"妇女节：3月8日妇女节，与我无关。",
		"清明节：4月3日至5日放假3天",
		"劳动节：4月30日至5月2日放假3天。",
		"端午节：6月4日至6日放假3天。",
		"小暑：7月7日小暑。不放假。",
		"七夕节：8月6日七夕节。不放假。",
		"中秋节：9月10日至12日放假3天。",
		"国庆节：10月1日至7日放假7天。",
		"立冬：11月8日立冬。不放假。",
		"艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"]
		var arry2=['一','二','三','四','五','六','七','八','九','十','十一','十二',]
	$('#calender ul li').mouseenter(function(){
			var num=$(this).index();
			$('#msg h2 strong').text(arry2[num]);
			$('#msg p').html(arry1[num]);
			$('#msg ').css('display','block');
			})
			
