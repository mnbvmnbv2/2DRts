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
				Math.floor((e.x - camera.x * camMove + i * camera.x) / 4) * 4,
				Math.floor((e.y - camera.y * camMove + i * camera.y) / 4) * 4
			);
		});
	}
}

function drawBuildings() {
	for (let elem of buildings) {
		ctx.drawImage(
			elem.pic,
			Math.floor((elem.x - camera.x * camMove) / 4) * 4,
			Math.floor((elem.y - camera.y * camMove) / 4) * 4
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
			Math.floor((unit.x - camera.x * camMove) / 4) * 4,
			Math.floor((unit.y - camera.y * camMove) / 4) * 4,
			128,
			128
		);
	}
}

function drawStaticUI() {
	staticUI.forEach((ui) => ctx.drawImage(ui.pic, ui.x, ui.y));
}
function drawMovingUI() {
	for (var i = 0; i < movingUI.length; i++) {
		ctx.drawImage(
			movingUI[i].pic,
			Math.floor((movingUI[i].x - camera.x * camMove) / 4) * 4,
			Math.floor((movingUI[i].y - camera.y * camMove) / 4) * 4
		);
	}
}

function drawGame() {
	ctx.clearRect(0, 0, 1800, 900);
	drawSky();
	drawBackground();
	drawBuildings();
	drawUnits();
	drawMovingUI();
	drawStaticUI();
	ctx.font = '40px LCD_Solid';
	//ctx.fillText('Menu', 24, 48);
	ctx.fillText(time, gameArea.scrollWidth / 2 - ctx.measureText(time).width / 2, 48);
	ctx.fillRect(mouseClick.x, mouseClick.y, 1, 1);

	let blueFilter = new Image();
	blueFilter.src = 'pictures/BlueFilter1.png';
	for (let i = 0; i < blueFilterNumber; i++) {
		ctx.drawImage(blueFilter, 0, 0);
	}

	requestAnimationFrame(drawGame);
}
drawGame();
