gameWindow.addEventListener('click', mouseClickFunc);
document.addEventListener(
	'contextmenu',
	function(ev) {
		ev.preventDefault();
		rightClick.x = ev.clientX + camera.x * camMove;
		rightClick.y = ev.clientY + camera.y * camMove;
		units[targetUnit].targetX = Math.floor((rightClick.x - units[targetUnit].width / 2) / pixelSize) * pixelSize;
		units[targetUnit].checkIfTargetX();
		return false;
	},
	false
);

let unitStopBuilding = false;

let leftClick = {
	x : 0,
	y : 0
};
let rightClick = {
	x : 0,
	y : 0
};

function mouseClickFunc(e) {
	leftClick.x = e.clientX + camera.x * camMove;
	leftClick.y = e.clientY + camera.y * camMove;
	console.log(leftClick.x + ', ' + leftClick.y);

	unitStopBuilding = false;

	staticUI.forEach((u) => {
		if (leftClick.x - camera.x * camMove >= u.x && leftClick.x - camera.x * camMove <= u.x + u.width) {
			if (leftClick.y - camera.y * camMove >= u.y && leftClick.y - camera.y * camMove <= u.y + u.height) {
			}
		}
	});

	movingUI.forEach((u) => {
		if (leftClick.x >= u.x && leftClick.x <= u.x + u.width) {
			if (leftClick.y >= u.y && leftClick.y <= u.y + u.height) {
				u.clickFunc();
			}
		}
	});

	units.forEach((u) => {
		if (leftClick.x >= u.x && leftClick.x <= u.x + u.width) {
			if (leftClick.y >= u.y && leftClick.y <= u.y + u.height) {
				targetUnit = units.indexOf(u);
				unitStopBuilding = true;
			}
		}
	});

	if (unitStopBuilding) {
		return;
	}

	buildings.forEach((b) => {
		if (leftClick.x >= b.x && leftClick.x <= b.x + b.width) {
			if (leftClick.y >= b.y && leftClick.y <= b.y + b.height) {
				$(function() {
					b.$modal.toggle();
				});
			}
		}
	});
}
