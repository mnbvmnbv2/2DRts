let sec = 0;
let min = 0;
let hour = 0;
let time = `${hour}:${min}:${sec}`;
function updateTime() {
	sec++;
	if (sec == 60) {
		sec = 0;
		min++;
	}
	if (min == 60) {
		min = 0;
		hour++;
	}
	time = `${hour}:${min}:${sec}`;
}
let timeUpdater = setInterval(updateTime, 1000);

function createLeaves() {
	for (let i = 0; i < Math.floor(Math.random() * 5) + 2; i++) {
		new ParticleElement('particles/leaf.png', Math.floor(Math.random() * 2000), 440, 1);
	}
	setTimeout(createLeaves, 4000);
}
createLeaves();

const timeMs = 200;
//oppdaterer frames på alle units
function updateFrames() {
	units.forEach((u) => u.updateFrame());
	buildings.forEach((b) => b.updateFrame());
	setTimeout(updateFrames, timeMs);
}
updateFrames();
