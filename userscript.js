var num = 0;
setInterval(function(){
	var matches = document.getElementById('cw_favicon').href.match(/n(\d+)\.ico$/);
	var current_num = parseInt(matches[1], 10);
	
	if (current_num != num){
		num = current_num;
		if (current_num > 0){
			window.fluid.dockBadge = current_num;
		}else{
			window.fluid.dockBadge = '';
		}
	}
},3000);
