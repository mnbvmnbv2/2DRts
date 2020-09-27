/*
backgroundblocksize:
600px x
600px y

canvassize:
1800x total
900y total
*/
const numberOfLayers = 12;
let skyElements = [];
let backgroundElements = [];
for (var i = 0; i < numberOfLayers; i++) {
	backgroundElements.push([]);
}

class BackgroundElement {
	constructor(pic, x, y, layer) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.layer = layer;

		if (this.layer == 'static') {
			skyElements.push(this);
		} else {
			backgroundElements[this.layer].push(this);
		}
	}
}

//sky
let sky = new BackgroundElement('Sky.png', 0, 0, 'static');

//mountains
for (var i = 0; i < 15; i++) {
	new BackgroundElement('mountains/Mountain' + ((i + 2) % 3 + 1) + '.png', 600 * i - 600 * 7, 150, 10);
}

/*
for (var i = 0; i < 20; i++) {
	new BackgroundElement('hills/Back1.png', 600 * i - 600 * 9, 462, 9);
}
*/
for (var i = 0; i < 20; i++) {
	new BackgroundElement('hills/Mid1.png', 600 * i - 600 * 9, 482, 8);
}
for (var i = 0; i < 20; i++) {
	new BackgroundElement('hills/Front1.png', 600 * i - 600 * 9, 502, 7);
}

for (var i = 0; i < 20; i++) {
	new BackgroundElement('forest/Back1.png', 600 * i - 600 * 9, 288, 4);
}
for (var i = 0; i < 20; i++) {
	new BackgroundElement('forest/Mid1.png', 600 * i - 600 * 9, 292, 3);
}
for (var i = 0; i < 20; i++) {
	new BackgroundElement('forest/Front1.png', 600 * i - 600 * 9, 296, 2);
}
for (var i = 0; i < 20; i++) {
	new BackgroundElement('forest/First' + (Math.floor(Math.random() * 3) + 1) + '.png', 600 * i - 600 * 9, 300, 1);
}

//bakken
for (var i = 0; i < 23; i++) {
	new BackgroundElement('Ground.png', 600 * i - 600 * 10, 300, 0);
}
for (var i = 0; i < 23; i++) {
	new BackgroundElement('MidGround1.png', 600 * i - 600 * 10, 900, 0);
}
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 23; j++) {
		new BackgroundElement('LowerGround1.png', 600 * j - 600 * 10, 1500 + 600 * i, 0);
	}
}
//new BackgroundElement('WoodenRoom.png', 600, 520, 0);
