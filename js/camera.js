const camMove = 3 * pixelSize;
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
			buildingModals.forEach((m) => {
				m.css('left', `-=${Math.floor(this.move * camMove / pixelSize) * pixelSize}`);
			});
		}
	}
	left() {
		if (this.x > border.left) {
			this.x -= this.move;
			buildingModals.forEach((m) => {
				m.css('left', `+=${Math.floor(this.move * camMove / pixelSize) * pixelSize}`);
			});
		}
	}
	up() {
		if (this.y > border.up) {
			this.y -= this.move;
			buildingModals.forEach((m) => {
				m.css('top', `+=${Math.floor(this.move * camMove / pixelSize) * pixelSize}`);
			});
		}
	}
	down() {
		if (this.y < border.down) {
			this.y += this.move;
			buildingModals.forEach((m) => {
				m.css('top', `-=${Math.floor(this.move * camMove / pixelSize) * pixelSize}`);
			});
		}
	}
}
let camera = new Camera();
