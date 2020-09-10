/*
backgroundblocksize:
600px x
600px y

canvassize:
1800x total
900y total
*/
let skyElements = [];
let backgroundElements = [];
for (var i = 0; i < 10; i++) {
	backgroundElements.push([]);
}

class BackgroundElement {
	constructor(pic, x, y, layer, visible) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.layer = layer;
		this.visible = visible;

		if (this.layer == 'static') {
			skyElements.push(this);
		} else {
			backgroundElements[this.layer].push(this);
		}
	}
}

//sky
let sky = new BackgroundElement('Sky.png', 0, 0, 'static', true);

//mountains
for (var i = 0; i < 15; i++) {
	new BackgroundElement('Mountain' + (Math.floor(Math.random() * 3) + 1) + '.png', 600 * i - 600 * 7, 220, 8, false);
}
for (var i = 0; i < 20; i++) {
	new BackgroundElement('Back1.png', 600 * i - 600 * 9, 292, 3, false);
}
for (var i = 0; i < 20; i++) {
	new BackgroundElement('Mid1.png', 600 * i - 600 * 9, 296, 2, false);
}

//foreground
for (var i = 0; i < 20; i++) {
	new BackgroundElement('Front' + (Math.floor(Math.random() * 2) + 1) + '.png', 600 * i - 600 * 9, 300, 1, false);
}

//bakken
for (var i = 0; i < 22; i++) {
	new BackgroundElement('Ground.png', 600 * i - 600 * 10, 300, 0, false);
}
for (var i = 0; i < 22; i++) {
	new BackgroundElement('MidGround1.png', 600 * i - 600 * 10, 900, 0, false);
}
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 22; j++) {
		new BackgroundElement('LowerGround1.png', 600 * j - 600 * 10, 1500 + 600 * i, 0, false);
	}
}
