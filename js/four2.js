// JavaScript Document
$(function(){
	$('form p .txt').focus(function(){
		$(this).addClass('txt_color');
		if($(this).val()==this.defaultValue){
			$(this).val("")
			}
		})
	$('form p .txt').blur(function(){
		$(this).removeClass('txt_color');
		if($(this).val()==""){
			$(this).val(this.defaultValue)
			}
		})
	


	
	})
	<!--星级评分-->
var num=1;
function lighton(num){//创建点亮星星函数
	$('#rating .item').each(function(index){
		if(index<=num){
			$(this).css({'background-position':'0 -28px'})
			}else{
			$(this).css({'background-position':'0 0'})
				}
		})
}
lighton(num);//初始化
$('#rating .item').mouseover(function(){
											  lighton($(this).index());
											  })
	                      .click(function(){
											  num=$(this).index();//改变全局对象Num的值
													})
$('#rating').mouseout(function(){
							lighton(num);
                             })							
