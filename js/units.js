//0 = idle, 1 = interact, 2 = walk, 3 = specialwalk
//unitPicSize = 128x128
//dir 0 = right, 1 = left
const timeMs = 200;
let units = [];

//oppdaterer frames på alle units
function updateFrames() {
	for (var i = 0; i < units.length; i++) {
		units[i].updateFrame();
	}
	setTimeout(updateFrames, timeMs);
}
updateFrames();

class unit {
	constructor(name, pic, x, y, animFrames, animation, dir) {
		this.name = name;
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
		}
	}
}
let miner = new unit('miner', 'Miner4x.png', 100, 684, [ 0, 0, 1, 1, 2, 2, 2, 3, 3, 3 ], 0, 0);
