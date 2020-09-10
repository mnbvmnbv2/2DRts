var gameArea = document.getElementById('gameWindow');

gameArea.width = gameArea.scrollWidth;
gameArea.height = gameArea.scrollHeight;

var ctx = gameArea.getContext('2d');

function drawSky() {
	for (var i = 0; i < skyElements.length; i++) {
		ctx.drawImage(skyElements[i].pic, skyElements[i].x, skyElements[i].y);
	}
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
	for (var i = 0; i < units.length; i++) {
		if (units[i].dir == 1) {
			ctx.drawImage(
				units[i].pic,
				units[i].frame * 128,
				128,
				128,
				128,
				Math.floor((units[i].x - camera.x * camMove + i * camera.x) / 4) * 4,
				Math.floor((units[i].y - camera.y * camMove + i * camera.y) / 4) * 4,
				128,
				128
			);
		} else {
			ctx.drawImage(
				units[i].pic,
				units[i].frame * 128,
				0,
				128,
				128,
				Math.floor((units[i].x - camera.x * camMove + i * camera.x) / 4) * 4,
				Math.floor((units[i].y - camera.y * camMove + i * camera.y) / 4) * 4,
				128,
				128
			);
		}
	}
}

function drawStaticUI() {
	for (var i = 0; i < staticUI.length; i++) {
		ctx.drawImage(staticUI[i].pic, staticUI[i].x, staticUI[i].y);
	}
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
	ctx.clearRect(-500, -500, 5000, 5000);
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
//Math.floor((backgroundElements[i][j].x camera.x * camMove + i * camera.x) / 4) * 4,
