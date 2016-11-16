window.alert("window对象的alert方法")

function dzt(){
	alert("5秒后屌炸天");
}
//指定事件执行一次
//window.setTimeout("dzt()", 5000);

function setDateTime() {
	var date = new Date();
	var day = date.getDay();
	var week;
	// 将数据转换成字符串
	switch (day) {
	case 0:
		week = "星期日";
		break;
	case 1:
		week = "星期一";
		break;
	case 2:
		week = "星期二";
		break;
	case 3:
		week = "星期三";
		break;
	case 4:
		week = "星期四";
		break;
	case 5:
		week = "星期五";
		break;
	case 6:
		week = "星期六";
		break;
	}
	var today = date.getFullYear() + "年" + (date.getMonth() + 1) + "月"
			+ date.getDate() + "日  " + week + " " + date.getHours() + ":"
			+ date.getMinutes() + ":" + date.getSeconds();
	document.getElementById("today").innerHTML = today;
}
window.setInterval("setDateTime()",1000);   //每秒刷新一次
window.open("http://www.baidu.com");   //弹出网页