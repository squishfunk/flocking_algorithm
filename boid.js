class Boid {
	constructor() {
		this.position     = createVector(width/2, height/2);
		this.velocity     = p5.Vector.random2D();
		this.velocity.setMag(random(0.5, 1.5));
		this.acceleration = createVector();
	}
	
	getMyNeighbours(boids){
		let neighbours = []; 
		let perception = 100;
		for (let boid of boids){
			if(boid == this){
				continue;
			}
			let distance = dist(
				this.position.x,
				this.position.y,
				boid.position.x,
				boid.position.y,
			);
			if(distance < perception){
				neighbours.push(boid);
			}
		}
		/* TODO this.neighbours chyba lepsze */
		return neighbours;
	}
	
	align(boids){
		let neighbours = this.getMyNeighbours(boids);
		let avg = createVector();
		
		for (let boid of neighbours){
			avg.add(boid.velocity);
		}
		avg.div(neighbours.length);
		this.velocity = avg;
	}
	
	update(){
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
	}
	
	show(){
		strokeWeight(16);
		stroke(255);
		point(this.position.x, this.position.y);
	}
}