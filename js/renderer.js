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
				Math.floor((e.y - camera.y * camMove + i * camera.y) / pixelSize) * pixelSize,
				e.width,
				e.height
			);
		});
	}
}

function drawBuildings() {
	buildings.forEach((b) => {
		ctx.drawImage(
			b.pic,
			b.frame * b.width / pixelSize,
			0,
			b.width / pixelSize,
			b.height / pixelSize,
			Math.floor((b.x - camera.x * camMove) / pixelSize) * pixelSize,
			Math.floor((b.y - camera.y * camMove) / pixelSize) * pixelSize,
			b.width,
			b.height
		);
	});
}

function drawUnits() {
	units.forEach((u) => {
		ctx.drawImage(
			u.pic,
			u.frame * u.width / pixelSize,
			u.height * u.dir / pixelSize, // column 2 if dir left (u dir = 1)
			u.width / pixelSize,
			u.height / pixelSize,
			Math.floor((u.x - camera.x * camMove) / pixelSize) * pixelSize,
			Math.floor((u.y - camera.y * camMove) / pixelSize) * pixelSize,
			u.width,
			u.height
		);
	});
}

/*function drawStaticUI() {
	staticUI.forEach((ui) =>
		ctx.drawImage(
			ui.pic,
			Math.floor(ui.x / pixelSize) * pixelSize,
			Math.floor(ui.y / pixelSize) * pixelSize,
			ui.width,
			ui.height
		)
	);
}*/
function drawMovingUI() {
	movingUI.forEach((ui) => {
		ctx.drawImage(
			ui.pic,
			Math.floor((ui.x - camera.x * camMove) / pixelSize) * pixelSize,
			Math.floor((ui.y - camera.y * camMove) / pixelSize) * pixelSize,
			ui.width,
			ui.height
		);
	});
}

new UIElement('icons/IconBase.png', gameArea.scrollWidth / 2 - 32, 686, 16, 16, false, function() {
	base = buildBase(this);
	base.checkAdjacent();
});

function drawGame() {
	ctx.fillStyle = 'rgb(191, 254, 255)';
	ctx.fillRect(0, 0, gameArea.scrollWidth, gameArea.scrollHeight);

	ctx.imageSmoothingEnabled = false;

	drawSky();
	drawBackground();
	drawBuildings();
	drawUnits();
	drawMovingUI();
	//drawStaticUI();
	ctx.fillStyle = 'black';
	ctx.font = '40px LCD_Solid';
	ctx.fillText(time, gameArea.scrollWidth / 2 - ctx.measureText(time).width / 2, 48);

	ctx.globalCompositeOperation = 'hue';

	for (let i = 0; i < blueFilterNumber; i++) {
		ctx.fillStyle = 'hsla(240, 100%, 20%, 0.5)';
		ctx.fillRect(0, 0, 2500, 2000);
	}

	camMove = Math.floor(100 / window.devicePixelRatio) / 100 * 3 * pixelSize;

	requestAnimationFrame(drawGame);
}
drawGame();
