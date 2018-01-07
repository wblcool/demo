// JavaScript Document
$(function(){
	$('input[type="button"]').last().click(function(){
		$('#div1').css({'width':'200px','height':'200px','background-color':'#000','border':'none'})
		})
    $('input[type="button"]').first().click(function(){
		$('#div1').css($('.nam').val(),$('.va').val())
	})
	})