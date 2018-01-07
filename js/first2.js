// JavaScript Document
window.onload=function(){
	$("label:eq(0)").click(function(){
		$('body').css("background-color","#FCF");
		$('.navbar').css("background-color","red");
		})
	$("label:eq(1)").click(function(){
		$('body').css("background-color","#6F0");
		$('.navbar').css("background-color","green");
		})	
	$("label:eq(2)").click(function(){
		$('body').css("background-color","#999");
		$('.navbar').css("background-color","black");
		})
		$("label:eq(1)").trigger("click")
	}