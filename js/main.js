var gameArea = document.getElementById('gameWindow');

gameArea.width = gameArea.scrollWidth;
gameArea.height = gameArea.scrollHeight;

var mountainRangePic = document.createElement('img');
mountainRangePic.src = 'pictures/Mountains.png';

var hillsRangePic = document.createElement('img');
hillsRangePic.src = 'pictures/aaser3.png';

var ctx = gameArea.getContext('2d');

drawBackground();
function drawBackground() {
	ctx.drawImage(mountainRangePic, 0, 0, 1024, 512);
	ctx.drawImage(mountainRangePic, 1024, 0, 1024, 512);
	ctx.drawImage(hillsRangePic, 0, 300, 640, 320);
	ctx.drawImage(hillsRangePic, 640, 300, 640, 320);
	ctx.drawImage(hillsRangePic, 1280, 300, 640, 320);
	requestAnimationFrame(drawBackground);
}
