const gameArea = document.getElementById('gameWindow');
const pixelSize = 4;
//starting from left going clockwise
const adjacency = [ { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 } ];
const leavesMoveTime = 100;

class CanvasElement {
	constructor(pic, x, y, width, height) {
		const that = this;
		$(function() {
			that.pic = $('<img />', {
				src : `pictures/${pic}`
			});
		});
		this.x = x;
		this.y = y;
		this.width = width * pixelSize;
		this.height = height * pixelSize;
	}
}
