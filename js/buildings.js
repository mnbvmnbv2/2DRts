/*
width = 400
height = 200
*/

let buildings = [];

class Building {
	constructor(name, pic, x, y, width, height, numberOfFrames) {
		this.width = width * pixelSize;
		this.height = height * pixelSize;
		this.name = name;
		let pict = new Image(this.width, this.height);
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		this.numberOfFrames = numberOfFrames;
		this.frame = 0;
		this.adjacent = { over: undefined, right: undefined, left: undefined, under: undefined };

		this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };

		buildings.push(this);
	}
	updateFrame() {
		if (this.numberOfFrames == 0) {
		} else {
			if (this.frame == this.numberOfFrames - 1) {
				this.frame = 0;
			} else {
				this.frame++;
			}
		}
	}
	createAdjacentBuildButtons() {
		let that = this;
		let uiSize = 16;

		//over
		if (this.adjacent.over === undefined) {
			let uiOver = new UIElement(
				'icons/IconBase.png',
				this.center.x - uiSize * pixelSize / 2,
				this.center.y - uiSize * pixelSize / 2 - this.height,
				uiSize,
				uiSize,
				false,
				function() {
					let building = buildBase(uiOver);
					that.adjacent.over = building;
					building.adjacent.under = that;
					building.createAdjacentBuildButtons();
				}
			);
		}

		//under
		console.log(this.adjacent.under);
		if (this.adjacent.under === undefined) {
			new UIElement(
				'icons/IconBase.png',
				this.center.x - uiSize * pixelSize / 2,
				this.center.y - uiSize * pixelSize / 2 + this.height,
				uiSize,
				uiSize,
				false,
				function() {
					let building = buildBase(this);
					that.adjacent.under = building;
					building.adjacent.over = that;
					building.createAdjacentBuildButtons();
				}
			);
		}

		//right
		if (this.adjacent.right === undefined) {
			new UIElement(
				'icons/IconBase.png',
				this.center.x - uiSize * pixelSize / 2 + this.width,
				this.center.y - uiSize * pixelSize / 2,
				uiSize,
				uiSize,
				false,
				function() {
					let building = buildBase(this);
					that.adjacent.right = building;
					building.adjacent.left = that;
					building.createAdjacentBuildButtons();
				}
			);
		}

		//left
		if (this.adjacent.left === undefined) {
			new UIElement(
				'icons/IconBase.png',
				this.center.x - uiSize * pixelSize / 2 - this.width,
				this.center.y - uiSize * pixelSize / 2,
				uiSize,
				uiSize,
				false,
				function() {
					let building = buildBase(this);
					that.adjacent.left = building;
					building.adjacent.right = that;
					building.createAdjacentBuildButtons();
				}
			);
		}
	}
}
