var gameArea = document.getElementById('gameWindow');

gameArea.width = gameArea.scrollWidth;
gameArea.height = gameArea.scrollHeight;

var ctx = gameArea.getContext('2d');

function drawSky() {
	skyElements.forEach((elem) => ctx.drawImage(elem.pic, elem.x, elem.y));
}

function drawBackground() {
	for (var i = backgroundElements.length - 1; i > -1; i--) {
		for (var j = 0; j < backgroundElements[i].length; j++) {
			ctx.drawImage(
				backgroundElements[i][j].pic,
				Math.floor((backgroundElements[i][j].x - camera.x * camMove + i * camera.x) / 4) * 4,
				Math.floor((backgroundElements[i][j].y - camera.y * camMove + i * camera.y) / 4) * 4
			);
		}
	}
}

function drawUnits() {
	for (let unit of units) {
		ctx.drawImage(
			unit.pic,
			unit.frame * 128,
			128 * unit.dir, // column 2 hvis retning left
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
	drawUnits();
	drawMovingUI();
	drawStaticUI();
	ctx.font = '40px LCD_Solid';
	ctx.fillText('Menu', 24, 48);
	ctx.fillText(`${hour}:${min}:${sec}`, 1630, 48);
	ctx.fillRect(mouseClick.x, mouseClick.y, 1, 1);

	requestAnimationFrame(drawGame);
}
drawGame();