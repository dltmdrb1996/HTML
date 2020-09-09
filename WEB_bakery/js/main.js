function partpopup() {
  	window.open("popup.html","","width=800, height=300");
}
function popupclose(){
	window.close();
}
function info() {
  	alert("저의 베이커리는 미금역 사거리에 있어요 \n많이 이용해 주세요");
}
setTimeout(function(){
	info();
},3000);
