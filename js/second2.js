// JavaScript Document
$(function(){
	var $res=$('#resultshow p:last');//获取显示区的最后一个p元素
	
	$('input').mousedown(function(e){//给计算需要的按键绑定获取值的事件	
	         if($res.text()=='0'){
					 if($(e.target).val()=="."){
							  $res.text('0.');}
					 else{
							  $res.text($(e.target).val());
							  }}
	         else{
			         $res.text($res.text()+$(e.target).val())		
	}})
	
	$('#per').mousedown(function(){//百分号
	            var percent=parseFloat($res.text())/100
		           $res.text(percent)
		})
		
	$('#result').mousedown(function(){//等于键	
		     var $eql=eval($res.text().slice(0,-1));//获取等号前面的字符串（因为有等号的字符串不能使用eval()）
		           $res.append('</br><span></span>')
		           $res.children().last().text($eql);//把获得的结果添加进创建的span元素中	
		})
		
	$('#clear').mousedown(function(){//清除键
		           $res.text('0');
		})
		
	$('#back').mousedown(function(){//退格键
		      if($res.text().length<=1){//只显示一位数时退格键表示清除
		           $res.text('0');
		} else{
			        var $resback=$res.text().slice(0,-1)//获得字符串除了最末尾以外的其他值
		            $res.text($resback);
		}})
	})
