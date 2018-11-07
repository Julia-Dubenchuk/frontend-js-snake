import SnakePart from "./snake-part";

export default function Snake({direction = 'right', length = 0} = {}) {
	this.parts = [];
	this.length = length;
	this.direction = direction;
	for(let i = 0; i < this.length; i++) {
		this.parts.push(new SnakePart());
    this.parts[i]['direction'] = direction;
  }

  this.head = this.parts[0];
  
  let coordX;
  let coordY;
	
    switch(this.direction) {
	  case "right": 
	  coordX = this.length-1;
	  for(let i = 0; i < this.length; i++) {
		this.parts[i]['x'] = coordX;
		coordX--;
		console.log(coordX);
	}
        break;
	  case "left":
	  coordX = this.length-1;
      for(let i = 0; i < this.length-1; i++) {
		this.parts[i]['x'] = -coordX;
		(-coordX--);
		console.log(-coordX);
	}
        break;
	  case "up":
	  coordY = this.length-1;
	  for(let i = 0; i < this.length-1; i++) {
		this.parts[i]['y'] = -coordY;
		-(coordY--);
	}
        break;
	  case "down":
	  coordY = this.length-1;
      for(let i = 0; i < this.length; i++) {
		  this.parts[i]['y'] = coordY;
		  coordY--;
      }
        break;  
      }
	
	
}

Snake.prototype.eat = function({direction = 'right', length = 1} = {}) {
	// this.parts.push(this.parts[this.parts.length-1]);
	// this.parts.push();
	this.parts.length === 0 ? snake.length = 1 : this.parts.push(new SnakePart());
	// console.log(this.parts.length);
	// switch(this.direction) {
	// 	case "right": 
	// 	//   this.x +=steps;
	// 	  break;
	// 	case "left":
	// 	//   this.x -=steps;
	// 	  break;
	// 	case "up":
	// 	//   this.y -=steps;
	// 	  break;
	// 	case "down":
	// 	//   this.y +=steps;
	// 	  break; 
	// }
	console.log(snake.length);
};

Snake.prototype.move = function(steps = 1) {
	this.direction = this.head.direction;
	steps = steps +(this.length - 1);
	switch(this.direction) {
		case "right": 
		for(let i = 0; i < this.length; i++) {
		  this.parts[i]['x'] = steps;
		  steps--;
		  console.log(steps);
	  }
		  break;
		case "left":
		  this.x -=steps;
		  break;
		case "up":
		  this.y -=steps;
		  break;
		case "down":
		coordY = this.length-1;
		for(let i = 0; i < this.length; i++) {
			this.parts[i]['y'] = steps;
			steps--;
		}
		  break;  
	  }
};

let config = {
	direction: 'right',
	length: 5
};

let snake = new Snake(config);
console.log(snake.move(1));

// it('length: 4, direction: left', function () {
// 	let config = {
// 		direction: 'left',
// 		length: 4
// 	};
// 	let snake = new Snake(config);

// 	[
// 		{ x: -3, y: 0 },
// 		{ x: -2, y: 0 },
// 		{ x: -1, y: 0 },
// 		{ x: 0, y: 0 }
// 	].forEach(function (coords, i) {
// 		expect({ x: snake.parts[i].x, y: snake.parts[i].y }).toEqual(coords);
// 	});
// });