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
let sec = 0;
let min = 0;
let hour = 0;
function updateTime() {
	sec++;
	if (sec == 60) {
		sec = 0;
		min++;
	}
	if (min == 60) {
		min = 0;
		hour++;
	}
	setTimeout(updateTime, 1000);
}
updateTime();

class UIElement {
	constructor(pic, x, y, width, height, isStaticUI, clickFunc) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.isStaticUI = isStaticUI;
		this.clickFunc = clickFunc;

		if (this.isStaticUI) {
			staticUI.push(this);
		} else {
			movingUI.push(this);
		}
	}
}

new UIElement('Header.png', 0, 0, 1800, 64, true, function() {});
new UIElement('IconBase.png', 868, 668, 64, 64, false, function() {
	new Building('WoodenRoom.png', 600, 520);
});
//new Building('WoodenRoom.png', this.x, this.y - 300);
