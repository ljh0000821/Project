
!(function() {
	var headerHtml = '<div class="header-box">' +
		'<div class="header-left">' +
		'<img src="https://www.baidu.com/img/baidu_jgylogo3.gif" />' +
		'</div>' +
		'<div class="header-right">' +
		'<ul>' +
		'<li class="header-tips Home"><a href="../Home/APP.html">首页</a></li>' +
		'<li class="header-tips Praise"><a href="../Community/Praise.html">涨粉社区</a></li>' +
		'<li class="header-tips Userfan"><a href="../UserFan/userfan.html">用户互粉</a></li>' +
		'<li class="header-tips Privilege"><a href="../Privilege/privilege.html">APP特权</a></li>' +
		'<li class="header-tips Helpcenter"><a href="../HelpCenter/helpcenter.html">帮助中心</a></li>' +
		'</ul>' +
		'</div>' +
		'</div>'
	var footerHtml = '<div class="footer-box">' +
		'<div class="footer-left">' +
		'<div class="footer-left-top">' +
		'<ul>' +
		'<li ><a href="../Home/home.html">首页</a></li>' +
		'<li>|</li>' +
		'<li ><a href="../Community/Praise.html">涨粉社区</a></li>' +
		'<li>|</li>' +
		'<li ><a href="../UserFan/userfan.html">用户互粉</a></li>' +
		'<li>|</li>' +
		'<li ><a href="../Privilege/privilege.html">APP特权</a></li>' +
		'<li>|</li>' +
		'<li ><a href="../HelpCenter/helpcenter.html">帮助中心</a></li>' +
		'</ul>' +
		'</div>' +
		'<div class="footer-left-bottom">' +
		'<ul>' +
		'<li>备案号：123456789</li>' +
		'<li>QQ客服：000000</li>' +
		'<li>客服： 023-123456</li>' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'<div class="footer-right">' +
		'<div class="QR-box">' +
		'<div class="QR">' +
		'<img src="../../img/QR.png" width="90"/>' +
		'Android下载' +
		'</div>' +
		'<div class="QR">' +
		'<img src="../../img/QR.png" width="90"/>' +
		'Ios下载' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>'
	var suspensionHtml = '<div class="suspension-one">' +
		'<span class="iconfont icon-dianhua" style="font-size:36px;color:#bebebe">' +
		'</span>'+
		'电话' +
		'</div>' +
		'<div style="width:42px;border-top:1px solid #bebebe;">' +
		'</div>' +
		'<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes" class="suspension-one">' +
		'<span class="iconfont icon-qq1" style="font-size:36px;color:#bebebe">' +
		'</span>'+
		' QQ' +
		'</a>'
	var header=document.getElementsByTagName("header")[0];
	//渲染头部
	if(header){
		header.innerHTML = headerHtml;
	}
	var footer=document.getElementsByTagName("footer")[0];
	//渲染底部
	if(footer){
		footer.innerHTML = footerHtml;
	}
	var suspension=document.getElementsByClassName("suspension")[0];
	//渲染右边浮动块
	if(suspension){
		suspension.innerHTML = suspensionHtml;
	}
//	$(".header-tips").click(function(){
//	    $(".header-tips").eq($(this).index()).css("background-color","yellow").siblings().removeClass('PC-active');
//	});
})();
