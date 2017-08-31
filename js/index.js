//var scrollFunc = function(e) {
//	ee = e || window.event;
//	var t1 = document.getElementById("wheelDelta");
//	var t2 = document.getElementById("detail");
//	var y = document.documentElement.scrollTop || document.body.scrollTop;
//	var fullheight = document.body.offsetHeight;
//	if(e.wheelDelta) { //IE/Opera/Chrome   
//		var a = e.wheelDelta; //向上为120，向下为-120
//		//		if(a > 0) { //向上   
//		//			document.body.scrollTop -= fullheight / 2;
//		//		}
//		if(a < 0) { //向下  
//			document.body.scrollTop += fullheight / 1;
//		}
//	} else if(e.detail) { //Firefox   
//		var a = e.detail; //向上为-3，向下为3  
////		if(a < 0) { //向上   
////			document.documentElement.scrollTop -= fullheight / 2;
////		}
//		if(a > 0) { //向下  
//			document.documentElement.scrollTop += fullheight / 1;
//		}
//	}
//
//}
//
///*注册事件*/
//if(document.addEventListener) {
//	document.addEventListener('DOMMouseScroll', scrollFunc, false);
//} //W3C   
//window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome

//点击图片显示在上方并且放大
$("#img").find('img').click(function() {
	if($(this).parent('li').hasClass('asd')) {
		//		$('.top3').show();
		$("#img").find('img').css({ 'position': '', 'top': '', 'width': '', 'height': '', 'border': '', 'opacity': '', 'transition': 'all 0s', 'border-radius': '' });
		$("#img").find('span').css('display', 'none');
		$(this).parent('li').removeClass('asd');
	} else {
		//		$('.top3').hide();
		$("#img").find('img').css({ 'position': '', 'top': '', 'width': '', 'height': '', 'opacity': '', 'border': '', 'transition': 'all 0s', 'border-radius': '' });
		$("#img").find('span').css('display', 'none');
		$(this).css({ 'position': 'absolute', 'top': '100px', 'left': '42.8%', 'magin-left': '-150px', 'width': '300px', 'height': '300px', 'border': '1px solid black', 'transition': 'all .7s', 'opacity': ' 1', 'border-radius': '50%' });
		$(this).parent('li').find('span').css({ 'display': 'block', 'transition': 'all .7s' });
		$(this).parent('li').addClass('asd').siblings('li').removeClass('asd');
	}

	if(screen.width <= 1366 && $(this).parent('li').hasClass('asd')) {
		console.log(1);
		$("#img").find('img').css({ 'position': '', 'top': '', 'width': '', 'height': '', 'opacity': '', 'border': '', 'transition': 'all 0s', 'border-radius': '' });
		$("#img").find('span').css('display', 'none');
		$(this).css({ 'position': 'absolute', 'top': '5px', 'left': '44.8%', 'magin-left': '-150px', 'width': '250px', 'height': '250px', 'border': '1px solid black', 'transition': 'all .7s', 'opacity': ' 1', 'border-radius': '50%' });
		$(this).parent('li').find('span').css({ 'display': 'block', 'transition': 'all .7s' });
		$(this).parent('li').addClass('asd').siblings('li').removeClass('asd');
	}
});