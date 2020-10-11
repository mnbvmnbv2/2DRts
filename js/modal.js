//Modal
const $blackening = $('#blackening');
const $modal = $('#modal');
const $close = $('#close');

$blackening.on('click', closeModal);
$close.on('click', closeModal);

let modalWidth = 300;
let modalHeight = 250;
$modal.css('width', `${modalWidth}px`);
$modal.css('Height', `${modalHeight}px`);

let modal = false;

buildingModals = [];

function openOptions() {
	if (!modal) {
		modal = true;
		$modal.toggle();
		$blackening.toggle();

		//center modal
		$modal.css('left', `${window.innerWidth / 2 - modalWidth / 2}px`);
		$modal.css('top', `${window.innerHeight / 2 - modalHeight / 2}px`);
	} else {
		closeModal();
	}
}

function closeModal() {
	modal = false;
	$modal.toggle();
	$blackening.toggle();
}
