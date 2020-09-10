document.addEventListener('mousedown', mouseClickFunc);

let mouseClick = {
	x : 0,
	y : 0
};
function mouseClickFunc(e) {
	//offset -9, -80
	mouseClick.x = e.screenX - 9;
	mouseClick.y = e.screenY - 80;
	console.log(mouseClick.x + ', ' + mouseClick.y);
}
