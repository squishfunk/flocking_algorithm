const flock = [];
function setup() {
	createCanvas(600, 360);
	flock.push(new Boid());
}

function draw() {
	background(61);
	for (let boid of flock) {
		boid.update();
		boid.show();
	}
}