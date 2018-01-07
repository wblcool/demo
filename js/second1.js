
/*$(function(){
	$('p').on('click',function(){
		alert($(this).html())
		})
	})*/
//javascript
window.onload=function(){
	var alt=document.getElementsByTagName('p');
	for(var i=0;i<alt.length;i++){
		  alt[i].onclick=function(){
			  alert(this.innerHTML)
			  }	
		}
	}