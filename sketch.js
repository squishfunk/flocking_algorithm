let flock;
function setup() {
	createCanvas(600, 360);
	flock = new Flock(100);
}

function draw() {
	background(61);
	flock.show();
}