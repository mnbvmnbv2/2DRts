/*
width = 400
height = 200
*/
let buildings = [];
let buildMap = new Map();

class Building {
	constructor(name, pic, x, y, width, height, numberOfFrames, coord) {
		this.name = name;

		let pict = new Image(this.width, this.height);
		pict.src = 'pictures/' + pic;
		this.pic = pict;

		this.x = x;
		this.y = y;
		this.width = width * pixelSize;
		this.height = height * pixelSize;

		this.numberOfFrames = numberOfFrames;
		this.frame = 0;

		this.checkNumber = 0;

		this.uiSize = 16;

		this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };

		const that = this;
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

		this.coord = { x: coord.x, y: coord.y };
		buildMap[`${this.coord.x}|${this.coord.y}`] = this;

		//left,top,right,bottom
		this.adjacent = [ undefined, undefined, undefined, undefined ];
		this.checkAdjacent();

		buildings.push(this);

		this.createAdjacentBuildButtons();

		console.log(buildings);
		console.log(buildMap);
	}
	left() {
		return this.adjacent[0];
	}
	top() {
		return this.adjacent[1];
	}
	right() {
		return this.adjacent[2];
	}
	bottom() {
		return this.adjacent[3];
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
	checkAdjacent() {
		this.checkNumber = buildings.length;
		adjacency.forEach((a, i) => {
			if (buildMap[`${a.x + this.coord.x}|${a.y + this.coord.y}`] != undefined) {
				this.adjacent[i] = buildMap[`${a.x + this.coord.x}|${a.y + this.coord.y}`];
				if (this.adjacent[i] instanceof Building && this.adjacent[i].checkNumber < buildings.length) {
					this.adjacent[i].checkAdjacent();
				}
			}
		});
	}
	createAdjacentBuildButtons() {
		let that = this;

		this.adjacent.forEach((a, i) => {
			if (a == undefined) {
				a = new UIElement(
					'icons/IconBase.png',
					this.center.x - this.uiSize * pixelSize / 2 + adjacency[i].x * this.width,
					this.center.y - this.uiSize * pixelSize / 2 + adjacency[i].y * this.height,
					this.uiSize,
					this.uiSize,
					false,
					function() {
						let coords = { x: that.coord.x + adjacency[i].x, y: that.coord.y + adjacency[i].y };
						console.log(adjacency[i]);
						buildRoom(this, coords);
					}
				);
				buildMap[`${adjacency[i].x + this.coord.x}|${adjacency[i].y + this.coord.y}`] = a;
			}
		});
	}
}
