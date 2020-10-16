/*
width = 100
height = 50
*/

const buildingTypes = [
	{ name: 'cobble', pic: 'buildings/CobbleRoom.png', frames: 0 },
	{ name: 'wood1', pic: 'buildings/WoodenRoom.png', frames: 0 },
	{ name: 'wood2', pic: 'buildings/WoodRoom1.png', frames: 0 },
	{ name: 'anim', pic: 'buildings/SmallRoom.png', frames: 4 },
	{ name: 'cavern', pic: 'buildings/Cavern.png', frames: 0 }
];

let buildings = [];
let buildMap = new Map();
let buildingModals = [];

class Building extends CanvasElement {
	constructor(name, pic, x, y, width, height, numberOfFrames, coord) {
		super(pic, x, y, width, height);
		this.name = name;

		this.numberOfFrames = numberOfFrames;
		this.frame = 0;

		this.checkNumber = 0;

		this.uiSize = 16;

		this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };

		this.createModal();

		this.coord = { x: coord.x, y: coord.y };
		buildMap[`${this.coord.x}|${this.coord.y}`] = this;

		//left,top,right,bottom
		this.adjacent = [ undefined, undefined, undefined, undefined ];
		this.checkAdjacent();

		buildings.push(this);

		this.createAdjacentBuildButtons();
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
	createModal() {
		const that = this;
		$(function() {
			that.$modal = $('<div></div>', {
				class  : 'modal',
				width  : `${that.width - 50}px`,
				height : `${that.height - 50}px`
			}).css({
				left : `${Math.floor((that.x + 25 - camera.x * camMove) / pixelSize) * pixelSize}px`,
				top  : `${Math.floor((that.y + 25 - camera.y * camMove) / pixelSize) * pixelSize}px`
			});

			const $topDiv = $(`<div></div>`, {
				class : 'topDiv'
			})
				.html(`<h3>${that.name}</h3>`)
				.appendTo(that.$modal);

			$('<input>', {
				type : 'checkbox'
			}).appendTo($topDiv);

			$('<span>X</span>', {
				class : 'close'
			})
				.on('click', function() {
					that.$modal.toggle();
				})
				.appendTo($topDiv);

			/*
			that.$modal.addClass('modal');
			that.$modal.css('left', `${Math.floor((that.x + 25 - camera.x * camMove) / pixelSize) * pixelSize}px`);
			that.$modal.css('top', `${Math.floor((that.y + 25 - camera.y * camMove) / pixelSize) * pixelSize}px`);
			that.$modal.css('width', `${that.width - 50}px`);
			that.$modal.css('height', `${that.height - 50}px`);
			*/

			const $main = $('<div></div>');
			buildingTypes.forEach((b) => {
				that.addBtnToModal($main, `Make ${b.name}`, function() {
					changeRoom(that, b.name, b.pic, b.frames);
				});
			});
			that.$modal.append($main);

			$('body').append(that.$modal);
			buildingModals.push(that.$modal);
		});
	}
	addBtnToModal(where, text, funct) {
		const that = this;
		$(function() {
			const $btn = $('<button></button>').html(text).on('click', function() {
				funct(that);
			});
			where.append($btn);
		});
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
						buildRoom(this, coords);
					}
				);
				buildMap[`${adjacency[i].x + this.coord.x}|${adjacency[i].y + this.coord.y}`] = a;
			}
		});
	}
}
function changeRoom(that, name, pic, frames) {
	that.name = name;
	that.numberOfFrames = frames;
	that.pic = new Image();
	that.pic.src = `pictures/${pic}`;
	that.frame = 0;
}
