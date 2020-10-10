let staticUI = [];
let movingUI = [];

class UIElement {
	constructor(pic, x, y, width, height, isStaticUI, clickFunc) {
		this.width = width * pixelSize;
		this.height = height * pixelSize;
		let pict = new Image(this.width, this.height);
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.clickFunc = clickFunc;

		if (isStaticUI) {
			staticUI.push(this);
		} else {
			movingUI.push(this);
		}
	}
	/*
	clickFunc() {
		switch (this.clickFuncType) {
			case 'buildWood':
				new Building('buildings/WoodenRoom.png', this.x - 268, this.y - 148);
				if (this.isStaticUI) {
				} else {
					movingUI.splice(movingUI.indexOf(this), 1);
				}
				break;
			case 'buildBase':
				new Building('Base', 'buildings/SmallRoom4x.png', this.x - 168, this.y - 66, 100, 50, 4);
				movingUI.splice(movingUI.indexOf(this), 1);
				break; 
			default:
				break;
		}
	}
	*/
}

function buildRoom(ui, coord) {
	let a = new Building(
		'Room',
		'buildings/SmallRoom4x.png',
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
		'buildings/SmallRoom4x.png',
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
