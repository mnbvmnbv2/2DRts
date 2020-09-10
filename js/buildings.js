let buildings = [];

class Building {
	constructor(pic, x, y) {
		let pict = new Image();
		pict.src = 'pictures/' + pic;
		this.pic = pict;
		this.x = x;
		this.y = y;
		//over
		new UIElement('IconBase.png', this.x + 268, this.y - 150, 64, 64, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		//under
		new UIElement('IconBase.png', this.x + 268, this.y + 450, 64, 64, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		//høyre
		new UIElement('IconBase.png', this.x + 868, this.y + 150, 64, 64, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});
		//venstre
		new UIElement('IconBase.png', this.x - 332, this.y + 150, 64, 64, false, function() {
			new Building('WoodenRoom.png', this.x - 268, this.y - 150);
		});

		buildings.push(this);
	}
}
