const backgroundSize = 150;
const numberOfLayers = 12;
let skyElements = [];
let backgroundElements = [];
for (var i = 0; i < numberOfLayers; i++) {
	backgroundElements.push([]);
}

class BackgroundElement extends CanvasElement {
	constructor(pic, x, y, width, height, layer) {
		super(pic, x, y, width, height);
		this.layer = layer;

		if (this.layer == 'static') {
			skyElements.push(this);
		} else {
			backgroundElements[this.layer].push(this);
		}
	}
}
class ParticleElement extends BackgroundElement {
	constructor(pic, x, y, width, height, layer) {
		super(pic, x, y, width, height, layer);
		this.time = 0;

		this.move();
	}
	removeThis() {
		backgroundElements[this.layer].splice(backgroundElements[this.layer].indexOf(this), 1);
	}
	move() {
		this.y += pixelSize;
		this.x += Math.floor(Math.random() * pixelSize * 2 + 1) - pixelSize;
		this.time++;
		if (this.time == 110) {
			this.removeThis();
		}
		let that = this;
		setTimeout(function() {
			that.move();
		}, leavesMoveTime);
	}
}

//mountains
for (var i = 0; i < 15; i++) {
	new BackgroundElement(
		'mountains/Mountain' + ((i + 2) % 3 + 1) + '.png',
		backgroundSize * pixelSize * i - backgroundSize * pixelSize * 7,
		150,
		backgroundSize,
		backgroundSize,
		10
	);
}
for (var i = 0; i < 5; i++) {
	new BackgroundElement(
		'clouds/cloud1.png',
		Math.floor(Math.random() * 3000) - 500,
		Math.floor(Math.random() * 150) + 100,
		70,
		50,
		10
	);
}

function addBackgroundElem(pic, height, layer) {
	for (var i = 0; i < 20; i++) {
		new BackgroundElement(
			pic,
			backgroundSize * pixelSize * i - backgroundSize * pixelSize * 9,
			height,
			backgroundSize,
			backgroundSize,
			layer
		);
	}
}

addBackgroundElem('hills/Mid1.png', 440, 9);
addBackgroundElem('hills/Front1.png', 450, 8);
addBackgroundElem('forest/BackBack1.png', 262, 6);
addBackgroundElem('forest/Back1.png', 280, 4);
addBackgroundElem('forest/Mid1.png', 288, 3);
addBackgroundElem('forest/Front1.png', 296, 2);
addBackgroundElem('forest/First' + (Math.floor(Math.random() * 3) + 1) + '.png', 300, 1);
addBackgroundElem('ground/Ground.png', 300, 0);
addBackgroundElem('ground/MidGround1.png', 900, 0);

for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 23; j++) {
		new BackgroundElement(
			'ground/LowerGround1.png',
			backgroundSize * pixelSize * j - backgroundSize * pixelSize * 10,
			1500 + backgroundSize * pixelSize * i,
			backgroundSize,
			backgroundSize,
			0
		);
	}
}
