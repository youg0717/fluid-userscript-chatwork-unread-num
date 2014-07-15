var num = 0;
setInterval(function(){
	var current_num = document.getElementById('_chatUnreadStatus').innerHTML;
	
	if (current_num != num){
		num = current_num;
		if (current_num > 0){
			window.fluid.dockBadge = current_num;
		}else{
			window.fluid.dockBadge = '';
		}
	}
},3000);
