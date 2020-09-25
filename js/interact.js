document.addEventListener('mousedown', mouseClickFunc);

let mouseClick = {
	x : 0,
	y : 0
};
function mouseClickFunc(e) {
	//offset -9, -80
	mouseClick.x = e.screenX - 48;
	mouseClick.y = e.screenY - 80;
	console.log(mouseClick.x + ', ' + mouseClick.y);
	staticUI.forEach((u) => {
		if (mouseClick.x >= u.x && mouseClick.x <= u.x + u.width) {
			if (mouseClick.y >= u.y && mouseClick.y <= u.y + u.height) {
			}
		}
	});
	movingUI.forEach((u) => {
		for (var i = 0; i < movingUI.length; i++) {
			if (mouseClick.x >= u.x - camera.x * camMove && mouseClick.x <= u.x + u.width - camera.x * camMove) {
				if (mouseClick.y >= u.y - camera.y * camMove && mouseClick.y <= u.y + u.height - camera.y * camMove) {
					u.clickFunc();
				}
			}
		}
	});
	buildings.forEach((b) => {
		for (var i = 0; i < movingUI.length; i++) {
			if (mouseClick.x >= b.x - camera.x * camMove && mouseClick.x <= b.x + 600 - camera.x * camMove) {
				if (mouseClick.y >= b.y - camera.y * camMove && mouseClick.y <= b.y + 300 - camera.y * camMove) {
					b.clickFunc();
				}
			}
		}
	});
}
