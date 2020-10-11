gameArea.width = gameArea.scrollWidth;
gameArea.height = gameArea.scrollHeight;

updateWindowSize();
function updateWindowSize() {
	gameArea.width = gameArea.scrollWidth;
	gameArea.height = gameArea.scrollHeight;
	requestAnimationFrame(updateWindowSize);
}

var ctx = gameArea.getContext('2d');

function drawSky() {
	skyElements.forEach((elem) => ctx.drawImage(elem.pic, elem.x, elem.y));
}

function drawBackground() {
	for (var i = backgroundElements.length - 1; i > -1; i--) {
		backgroundElements[i].forEach((e) => {
			ctx.drawImage(
				e.pic,
				Math.floor((e.x - camera.x * camMove + i * camera.x) / pixelSize) * pixelSize,
				Math.floor((e.y - camera.y * camMove + i * camera.y) / pixelSize) * pixelSize
			);
		});
	}
}

function drawBuildings() {
	for (let build of buildings) {
		ctx.drawImage(
			build.pic,
			build.frame * build.width,
			0,
			build.width,
			build.height,
			Math.floor((build.x - camera.x * camMove) / pixelSize) * pixelSize,
			Math.floor((build.y - camera.y * camMove) / pixelSize) * pixelSize,
			build.width,
			build.height
		);
	}
}

function drawUnits() {
	for (let unit of units) {
		ctx.drawImage(
			unit.pic,
			unit.frame * 128,
			128 * unit.dir, // column 2 if dir left (unit dir = 1)
			128,
			128,
			Math.floor((unit.x - camera.x * camMove) / pixelSize) * pixelSize,
			Math.floor((unit.y - camera.y * camMove) / pixelSize) * pixelSize,
			128,
			128
		);
	}
}

function drawStaticUI() {
	staticUI.forEach((ui) =>
		ctx.drawImage(ui.pic, Math.floor(ui.x / pixelSize) * pixelSize, Math.floor(ui.y / pixelSize) * pixelSize)
	);
}
function drawMovingUI() {
	for (var i = 0; i < movingUI.length; i++) {
		ctx.drawImage(
			movingUI[i].pic,
			Math.floor((movingUI[i].x - camera.x * camMove) / pixelSize) * pixelSize,
			Math.floor((movingUI[i].y - camera.y * camMove) / pixelSize) * pixelSize
		);
	}
}

new UIElement('icons/IconBase.png', gameArea.scrollWidth / 2 - 32, 686, 16, 16, false, function() {
	base = buildBase(this);
	base.checkAdjacent();
});

function drawGame() {
	drawSky();
	drawBackground();
	drawBuildings();
	drawUnits();
	drawMovingUI();
	drawStaticUI();
	ctx.font = '40px LCD_Solid';
	ctx.fillText(time, gameArea.scrollWidth / 2 - ctx.measureText(time).width / 2, 48);

	ctx.globalCompositeOperation = 'hue';

	let blueFilter = new Image();
	blueFilter.src = 'pictures/BlueFilter1.png';
	for (let i = 0; i < blueFilterNumber; i++) {
		ctx.fillStyle = 'hsla(240, 100%, 20%, 0.5)';
		ctx.fillRect(0, 0, 2500, 2000);
	}

	requestAnimationFrame(drawGame);
}
drawGame();
