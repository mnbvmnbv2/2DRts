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
	for (var i = 0; i < staticUI.length; i++) {
		if (mouseClick.x >= staticUI[i].x && mouseClick.x <= staticUI[i].x + staticUI[i].width) {
			if (mouseClick.y >= staticUI[i].y && mouseClick.y <= staticUI[i].y + staticUI[i].height) {
			}
		}
	}
	for (var i = 0; i < movingUI.length; i++) {
		if (
			mouseClick.x >= movingUI[i].x - camera.x * camMove &&
			mouseClick.x <= movingUI[i].x + movingUI[i].width - camera.x * camMove
		) {
			if (
				mouseClick.y >= movingUI[i].y - camera.y * camMove &&
				mouseClick.y <= movingUI[i].y + movingUI[i].height - camera.y * camMove
			) {
				movingUI[i].clickFunc();
			}
		}
	}
}
