let backgroundElements = [];

class BackgroundElement {
	constructor(pic, x, y, width, height, layer) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.layer = layer;

		backgroundElements.push(this);
	}
}

function cameraRight() {
	console.log('right');
	for (var i = 0; i < backgroundElements.length; i++) {
		backgroundElements[i].x -= backgroundElements[i].speed;
	}
}
function cameraLeft() {
	console.log('left');
	for (var i = 0; i < backgroundElements.length; i++) {
		backgroundElements[i].x += backgroundElements[i].speed;
	}
}

function cameraUp() {
	console.log('up');
	for (var i = 0; i < backgroundElements.length; i++) {
		backgroundElements[i].y += backgroundElements[i].speed;
	}
}

function cameraDown() {
	console.log('down');
	for (var i = 0; i < backgroundElements.length; i++) {
		backgroundElements[i].y -= backgroundElements[i].speed;
	}
}

let sky = new BackgroundElement('Sky.png', -500, -500, 5000, 3000, 0);
let mountainRange1 = new BackgroundElement('Mountains.png', -512, 0, 1024, 512, 5);
let mountainRange2 = new BackgroundElement('Mountains.png', 512, 0, 1024, 512, 5);
let mountainRange3 = new BackgroundElement('Mountains.png', 1536, 0, 1024, 512, 5);
let hillsRange1 = new BackgroundElement('aaser3.png', -500, 70, 1000, 500, 4);
let hillsRange2 = new BackgroundElement('aaser3.png', 500, 70, 1000, 500, 4);
let hillsRange3 = new BackgroundElement('aaser3.png', 1500, 70, 1000, 500, 4);
let backForest1 = new BackgroundElement('BackForest.png', -500, 300, 1000, 400, 3);
let backForest2 = new BackgroundElement('BackForest.png', 500, 300, 1000, 400, 3);
let backForest3 = new BackgroundElement('BackForest.png', 1500, 300, 1000, 400, 3);
let midForest1 = new BackgroundElement('MidForest.png', -400, 300, 1000, 400, 2);
let midForest2 = new BackgroundElement('MidForest.png', 600, 300, 1000, 400, 2);
let midForest3 = new BackgroundElement('MidForest.png', 1600, 300, 1000, 400, 2);
let frontForest1 = new BackgroundElement('FrontForest.png', -1000, 250, 2000, 800, 1);
let frontForest2 = new BackgroundElement('FrontForest.png', 1000, 250, 2000, 800, 1);
let frontForest3 = new BackgroundElement('FrontForest.png', 3000, 250, 2000, 800, 1);
let foreground1 = new BackgroundElement('Foreground.png', -500, 540, 1000, 400, 0);
let foreground2 = new BackgroundElement('Foreground.png', 500, 540, 1000, 400, 0);
let foreground3 = new BackgroundElement('Foreground.png', 1500, 540, 1000, 400, 0);
let foreground4 = new BackgroundElement('Foreground.png', 2500, 540, 1000, 400, 0);
let foreground5 = new BackgroundElement('Foreground.png', -1500, 540, 1000, 400, 0);
let man = new BackgroundElement('MinerSpritesheet2xt.png', 500, 500, 512, 64, 0);

var gameArea = document.getElementById('gameWindow');

gameArea.width = gameArea.scrollWidth;
gameArea.height = gameArea.scrollHeight;

var ctx = gameArea.getContext('2d');

function drawBackground() {
	ctx.clearRect(-500, -500, 5000, 5000);
	for (var i = 0; i < backgroundElements.length; i++) {
		ctx.drawImage(
			backgroundElements[i].pic,
			backgroundElements[i].x,
			backgroundElements[i].y,
			backgroundElements[i].width,
			backgroundElements[i].height
		);
	}
}
function drawGame() {
	drawBackground();
	let acIcon = new Image();
	acIcon.src = 'pictures/AcceptIcon.png';
	ctx.drawImage(acIcon, 1000, 700, 64, 64);

	requestAnimationFrame(drawGame);
}
drawGame();

function zoomIn() {
	console.log('in');
	ctx.scale(1.1, 1.1);
}

function zoomOut() {
	console.log('out');
	ctx.scale(0.9, 0.9);
}
