//0 = idle, 1 = interact, 2 = walk, 3 = specialwalk
//unitPicSize = 128x128
//dir 0 = right, 1 = left

let units = [];
let targetUnit = 0;

class unit {
	constructor(name, pic, x, y, width, height, animFrames, animation, dir) {
		this.name = name;

		this.width = width * pixelSize;
		this.height = height * pixelSize;

		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;

		this.x = x;
		this.y = y;
		this.animFrames = animFrames;
		this.animation = animation;
		this.frame = this.animFrames.indexOf(this.animation);
		this.dir = dir;
		this.targetX = x;
		this.loop = 0;

		units.push(this);
		this.updateFrame();
		this.checkIfTargetX();
	}
	moveRight() {
		this.animation = 2;
		this.x += 4;
		this.dir = 0;
	}
	moveLeft() {
		this.animation = 2;
		this.x -= 4;
		this.dir = 1;
	}
	checkIfTargetX() {
		clearTimeout(this.loop);
		let that = this;
		if (this.x < this.targetX) {
			this.moveRight();
			this.loop = setTimeout(function() {
				that.checkIfTargetX();
			}, 25);
		} else if (this.x > this.targetX) {
			this.moveLeft();
			this.loop = setTimeout(function() {
				that.checkIfTargetX();
			}, 25);
		}
	}
	updateFrame() {
		//hvis neste frame er en del av anim så øk frame
		if (this.animFrames[this.frame + 1] == this.animation) {
			this.frame++;
		} else {
			//hvis ikke start anim på nytt
			this.frame = this.animFrames.indexOf(this.animation);
			this.animation = 0;
		}
	}
}
let miner = new unit('miner', 'Miner.png', 100, floorHeight - 32 * 4, 32, 32, [ 0, 0, 1, 1, 2, 2, 2, 3, 3, 3 ], 0, 0);
