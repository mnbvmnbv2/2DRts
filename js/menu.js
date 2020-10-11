//Menu
const $blackening = $('#blackening');
const $menu = $('#menu');
const $close = $('#close');

$blackening.on('click', closeMenu);
$close.on('click', closeMenu);

let menuWidth = 300;
let menuHeight = 250;
$menu.css('width', `${menuWidth}px`);
$menu.css('Height', `${menuHeight}px`);

let menu = false;

function openOptions() {
	if (!menu) {
		menu = true;
		$menu.toggle();
		$blackening.toggle();

		//center menu
		$menu.css('left', `${window.innerWidth / 2 - menuWidth / 2}px`);
		$menu.css('top', `${window.innerHeight / 2 - menuHeight / 2}px`);
	} else {
		closeMenu();
	}
}

function closeMenu() {
	menu = false;
	$menu.toggle();
	$blackening.toggle();
}
