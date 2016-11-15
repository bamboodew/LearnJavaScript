function modifyDOM() {
	document.getElementById("txt").innerHTML="用户名";
	document.getElementById("username").value="Jack";
}
		
function addDOM() {
	var para=document.createElement("p");   //创建标签p
	var node=document.createTextNode("...前...");   //在p中添加内容
	para.appendChild(node);
	var parent=document.getElementById("parent");
	var son1=document.getElementById("son1");
	parent.insertBefore(para,son1);
	
	var para2=document.createElement("p");   //创建标签p
	var node2=document.createTextNode("...后...");   //在p中添加内容
	para2.appendChild(node2);
	parent.appendChild(para2);
}

function removeDOM() {
	var parent=document.getElementById("parent");
	var son1=document.getElementById("son1");
	parent.removeChild(son1);
}

function modifyDOMCSS() {
	//通过id找到对应的文档，再对文档的style的属性进行修改。
	document.getElementById("girl").style.color="red";
}