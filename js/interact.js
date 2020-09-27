document.addEventListener('mousedown', mouseClickFunc);
gameArea.addEventListener(
	'contextmenu',
	function(ev) {
		ev.preventDefault();
		units[0].targetX = Math.floor(mouseClick.x / 4) * 4;
		units[0].checkIfTargetX();
		return false;
	},
	false
);

let mouseClick = {
	x : 0,
	y : 0
};

let xOffset = 0;
let yOffset = 0;
function mouseClickFunc(e) {
	//offset -9, -80
	mouseClick.x = e.clientX + xOffset + camera.x * camMove;
	mouseClick.y = e.clientY + yOffset + camera.y * camMove;
	console.log(mouseClick.x + ', ' + mouseClick.y);

	staticUI.forEach((u) => {
		if (mouseClick.x - camera.x * camMove >= u.x && mouseClick.x - camera.x * camMove <= u.x + u.width) {
			if (mouseClick.y - camera.y * camMove >= u.y && mouseClick.y - camera.y * camMove <= u.y + u.height) {
			}
		}
	});

	movingUI.forEach((u) => {
		for (var i = 0; i < movingUI.length; i++) {
			if (mouseClick.x >= u.x && mouseClick.x <= u.x + u.width) {
				if (mouseClick.y >= u.y && mouseClick.y <= u.y + u.height) {
					u.clickFunc();
				}
			}
		}
	});
	buildings.forEach((b) => {
		for (var i = 0; i < movingUI.length; i++) {
			if (mouseClick.x >= b.x && mouseClick.x <= b.x + 600) {
				if (mouseClick.y >= b.y && mouseClick.y <= b.y + 300) {
					b.clickFunc();
				}
			}
		}
	});
}
