/*function fontAuto(width){//效果图的宽度
	var htmlNode = document.documentElement;
	var screenW = document.documentElement.clientWidth;
	if(screenW>=750){
		htmlNode.style.fontSize="625%";
	}
	else{
		htmlNode.style.fontSize= screenW/width*625+"%"
	}
}*/

function fontAuto(width){//width表示效果图的宽度
	var htmlNode=document.documentElement;//html节点(标签)
	var screenW=htmlNode.clientWidth;//html的可视宽度（屏幕的宽度）
	if(screenW>=750){
		htmlNode.style.fontSize="625%";
	}
	else{
		htmlNode.style.fontSize=screenW/width*625+"%";
	}
}


fontAuto(750);
window.onresize=function(){
	fontAuto(750);
}