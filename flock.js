class Flock {
	constructor(size) {
		this.flock = [];
		if(size > 0){
			for(let i = 0; i < size; i++){
				this.flock.push(new Boid);
			}
		}
	}
	
	addBoid(boid){
		this.flock.push(boid);
	}
	
	show(){
		for (let boid of this.flock) {
			boid.align(this.flock);
			boid.update();
			boid.show();
		}
	}
}