//----keybinds

document.addEventListener('keydown', keyClick);

function keyClick(e) {
	console.log(e.code);
	if (e.code == 'KeyA') {
		cameraLeft();
	} else if (e.code == 'KeyD') {
		cameraRight();
	} else if (e.code == 'KeyS') {
		cameraDown();
	} else if (e.code == 'KeyW') {
		cameraUp();
	} else if (e.code == 'ArrowUp') {
		cameraUp();
	} else if (e.code == 'ArrowDown') {
		cameraDown();
	} else if (e.code == 'ArrowLeft') {
		cameraLeft();
	} else if (e.code == 'ArrowRight') {
		cameraRight();
	} else if (e.code == 'KeyZ') {
		zoomIn();
	} else if (e.code == 'KeyX') {
		zoomOut();
	}
}
