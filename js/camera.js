class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.move = 10;
	}
	right() {
		this.x += this.move;
	}
	left() {
		this.x -= this.move;
	}
	up() {
		this.y -= this.move;
	}
	down() {
		this.y += this.move;
	}
}
