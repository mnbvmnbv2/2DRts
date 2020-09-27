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
		/*
		//over
		new UIElement('IconBase.png', this.x + 268, this.y - 150, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		//under
		new UIElement('IconBase.png', this.x + 268, this.y + 450, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		//høyre
		new UIElement('IconBase.png', this.x + 868, this.y + 150, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		//venstre
		new UIElement('IconBase.png', this.x - 332, this.y + 150, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		*/
		//new UIElement('icons/IconBase.png', this.x + 268, this.y - 150, false, 'buildWood');
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
}
