let staticUI = [];
let movingUI = [];

class UIElement extends CanvasElement {
	constructor(pic, x, y, width, height, isStaticUI, clickFunc) {
		super(pic, x, y, width, height);
		this.clickFunc = clickFunc;

		if (isStaticUI) {
			staticUI.push(this);
		} else {
			movingUI.push(this);
		}
	}
}

function buildRoom(ui, coord) {
	let a = new Building(
		'Room',
		'buildings/SmallRoom.png',
		Math.floor((ui.x - 168) / pixelSize) * pixelSize,
		Math.floor((ui.y - 66) / pixelSize) * pixelSize,
		100,
		50,
		4,
		coord
	);
	movingUI.splice(movingUI.indexOf(ui), 1);
	return a;
}
function buildBase(ui) {
	let a = new Building(
		'Base',
		'buildings/SmallRoom.png',
		Math.floor((ui.x - 168) / pixelSize) * pixelSize,
		Math.floor((ui.y - 66) / pixelSize) * pixelSize,
		100,
		50,
		4,
		{ x: 0, y: 0 }
	);
	movingUI.splice(movingUI.indexOf(ui), 1);
	return a;
}
