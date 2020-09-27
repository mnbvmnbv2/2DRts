document.addEventListener('keydown', keyClick);
document.addEventListener('wheel', mouseWheel);

let blueFilterNumber = 0;

function keyClick(e) {
	console.log(e.code);
	if (e.code == 'KeyA') {
		units[0].moveLeft();
	} else if (e.code == 'KeyD') {
		units[0].moveRight();
	} else if (e.code == 'KeyS') {
		camera.down();
	} else if (e.code == 'KeyW') {
		camera.up();
	} else if (e.code == 'KeyK') {
		if (blueFilterNumber < 20) {
			blueFilterNumber++;
		}
	} else if (e.code == 'KeyJ') {
		if (blueFilterNumber > 0) {
			blueFilterNumber--;
		}
	} else if (e.code == 'ArrowUp') {
		camera.up();
	} else if (e.code == 'ArrowDown') {
		camera.down();
	} else if (e.code == 'ArrowLeft') {
		camera.left();
	} else if (e.code == 'ArrowRight') {
		camera.right();
	} else if (e.code == 'Escape') {
		openOptions();
	} else if (e.code == 'KeyX') {
		console.log('sadgga');
	}
}

function mouseWheel(e) {
	if (e.deltaY > 0) {
		camera.down();
	} else {
		camera.up();
	}
}
