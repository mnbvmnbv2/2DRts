//Modulo
const blackeningEl = document.getElementById('blackening');
const moduloEl = document.getElementById('modulo');
const closeEl = document.getElementById('close');

blackeningEl.addEventListener('click', closeModulo);
closeEl.addEventListener('click', closeModulo);

let modulo = false;

let moduloWidth = 300;
let moduloHeight = 250;
moduloEl.style.width = moduloWidth + 'px';
moduloEl.style.height = moduloHeight + 'px';

let targetBoxIndex = 0;
function openOptions() {
	if (!modulo) {
		modulo = true;
		moduloEl.style.display = 'inline';
		blackeningEl.style.display = 'inline';

		//center modulo
		moduloEl.style.left = window.innerWidth / 2 - moduloWidth / 2 - 20 + 'px';
		moduloEl.style.top = window.innerHeight / 2 - moduloHeight / 2 - 20 + 'px';
	} else {
		closeModulo();
	}
}

function closeModulo() {
	modulo = false;
	moduloEl.style.display = 'none';
	blackeningEl.style.display = 'none';
}
