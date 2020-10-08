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

		let that = this;

		$(function() {
			that.$modal = $('<div></div>').html(`<h3>${that.name}</h3>`);
			let $close = $('<span></span>').html('X').on('click', function() {
				that.$modal.toggle();
			});
			$close.addClass('close');
			that.$modal.append($close);
			that.$modal.addClass('modal');
			that.$modal.css('left', `${Math.floor((that.x + 25 - camera.x * camMove) / pixelSize) * pixelSize}px`);
			that.$modal.css('top', `${Math.floor((that.y + 25 - camera.y * camMove) / pixelSize) * pixelSize}px`);
			that.$modal.css('width', `${that.width - 50}px`);
			that.$modal.css('height', `${that.height - 50}px`);
			$('body').append(that.$modal);
			buildingModals.push(that.$modal);
		});

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
