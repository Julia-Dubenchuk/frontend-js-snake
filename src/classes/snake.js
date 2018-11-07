import SnakePart from "./snake-part";

export default function Snake({direction = 'right', length = 0} = {}) {
	this.parts = [];
	this.length = length;
	this.direction = direction;
	for(let i = 0; i < this.length; i++) {
		this.parts.push(new SnakePart());
    this.parts[i]['direction'] = direction;
  }
  
  
	
    switch(this.direction) {
      case "right": 
      //   this.x +=steps;
        break;
      case "left":
      //   this.x -=steps;
        break;
      case "up":
      //   this.y -=steps;
        break;
      case "down":
      for(let i = 0; i < this.length; i++) {
          this.parts[i]['y'] = +this.parts[i]['y'] + 1;
      }
        break;  
      }
	
	this.head = this.parts[0];
}

Snake.prototype.eat = function() {
	this.parts.push(this.parts[this.parts.length-1]);
};

Snake.prototype.move = function(steps = 1) {
	this.direction = this.head.direction;
	switch(this.direction) {
		case "right": 
		  this.x +=steps;
		  break;
		case "left":
		  this.x -=steps;
		  break;
		case "up":
		  this.y -=steps;
		  break;
		case "down":
		  this.y +=steps;
		  break;  
	  }
};

let config = {
	direction: 'down',
	length: 5
};

let snake = new Snake(config);
console.log(snake);