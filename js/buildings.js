let buildings = [];

class Building {
	constructor(pic, x, y) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;

		buildings.push(this);
	}
}
