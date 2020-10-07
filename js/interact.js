gameWindow.addEventListener('mousedown', mouseClickFunc);
document.addEventListener(
	'contextmenu',
	function(ev) {
		ev.preventDefault();
		units[0].targetX = Math.floor(mouseClick.x / pixelSize) * pixelSize;
		units[0].checkIfTargetX();
		return false;
	},
	false
);

let mouseClick = {
	x : 0,
	y : 0
};

function mouseClickFunc(e) {
	mouseClick.x = e.clientX + camera.x * camMove;
	mouseClick.y = e.clientY + camera.y * camMove;
	console.log(mouseClick.x + ', ' + mouseClick.y);

	staticUI.forEach((u) => {
		if (mouseClick.x - camera.x * camMove >= u.x && mouseClick.x - camera.x * camMove <= u.x + u.width) {
			if (mouseClick.y - camera.y * camMove >= u.y && mouseClick.y - camera.y * camMove <= u.y + u.height) {
			}
		}
	});

	movingUI.forEach((u) => {
		if (mouseClick.x >= u.x && mouseClick.x <= u.x + u.width) {
			if (mouseClick.y >= u.y && mouseClick.y <= u.y + u.height) {
				u.clickFunc();
			}
		}
	});

	buildings.forEach((b) => {
		if (mouseClick.x >= b.x && mouseClick.x <= b.x + b.width) {
			if (mouseClick.y >= b.y && mouseClick.y <= b.y + b.height) {
				$(function() {
					if ($(`[data-modalId="${buildings.indexOf(b)}`).length == 0) {
						let $buildingModal = $('<div></div>').html(`<h3>${b.name}</h3>`);
						let $close = $('<span></span>').html('X').on('click', function() {
							buildingModals.splice(buildingModals.indexOf($close.parent), 1);
							$close.parent().remove();
						});
						$close.addClass('close');
						$buildingModal.append($close);

						$buildingModal.attr('data-modalId', buildings.indexOf(b));
						$buildingModal.addClass('modal');
						$buildingModal.css(
							'left',
							`${Math.floor((b.x + 25 - camera.x * camMove) / pixelSize) * pixelSize}px`
						);
						$buildingModal.css(
							'top',
							`${Math.floor((b.y + 25 - camera.y * camMove) / pixelSize) * pixelSize}px`
						);
						$buildingModal.css('width', `${b.width - 50}px`);
						$buildingModal.css('height', `${b.height - 50}px`);
						$('body').append($buildingModal);
						buildingModals.push($buildingModal);
					}
				});
				//new UIElement('UI/BuildingUI.png', b.x + 7 * pixelSize, b.y + 4 * pixelSize, 86, 42, false, null);
			}
		}
	});
}
