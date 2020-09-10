const camMove = 12;
const border = { right: 500, left: -500, up: -500, down: 500 };
class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.move = 2;
	}
	right() {
		if (this.x < border.right) {
			this.x += this.move;
		}
	}
	left() {
		if (this.x > border.left) {
			this.x -= this.move;
		}
	}
	up() {
		if (this.y > border.up) {
			this.y -= this.move;
		}
	}
	down() {
		if (this.y < border.down) {
			this.y += this.move;
		}
	}
}
let camera = new Camera();

function zoomIn() {
	console.log('in');
	ctx.scale(1.1, 1.1);
}

function zoomOut() {
	console.log('out');
	ctx.scale(0.9, 0.9);
}
