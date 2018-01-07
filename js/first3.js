// JavaScript Document
window.onload=function(){
	var $war=$('.warning');
	$("label").click(function(){
		if($war.hasClass('open')){
			  $war.removeClass('open');  
		}
		else{
			  $war.addClass('open');
		}
	})
	}