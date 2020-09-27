/*
backgroundblocksize:
600px x
600px y

canvassize:
1800x total
900y total
*/
let staticUI = [];
let movingUI = [];

class UIElement {
	constructor(pic, x, y, width, height, isStaticUI, clickFuncType) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.isStaticUI = isStaticUI;
		this.clickFuncType = clickFuncType;

		if (this.isStaticUI) {
			staticUI.push(this);
		} else {
			movingUI.push(this);
		}
	}
	clickFunc() {
		switch (this.clickFuncType) {
			case 'buildWood':
				new Building('buildings/WoodenRoom.png', this.x - 268, this.y - 148, function() {
					//dette krasjer, idk om evig løkke
					//new UIElement('IconBase.png', this.x + 468, this.y + 250, 64, 64, false, 'buildWood');
				});
				if (this.isStaticUI) {
				} else {
					movingUI.splice(movingUI.indexOf(this), 1);
				}
				break;

			default:
				break;
		}
	}
}

//new UIElement('Header.png', 0, 0, 1800, 64, true, function() {});
new UIElement('icons/IconBase.png', 868, 668, 64, 64, false, 'buildWood');
