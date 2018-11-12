import SnakePart from './snake-part';

export default function Snake ({ direction = 'right', length = 0 } = {}) {
	this.parts = [];
	this.length = length;
	this.direction = direction;
	for (let i = 0; i < this.length; i++) {
		this.parts.push(new SnakePart());
		this.parts[i].direction = direction;
	}

	this.head = this.parts[0];

	// let coordX;
	// let coordY;

	// switch (this.direction) {
	// 	case 'right':
	// 		coordX = this.length - 1;
	// 		for (let i = 0; i < this.length; i++) {
	// 			this.parts[i].x = coordX;
	// 			coordX--;
	// 		}
	// 		break;
	// 	case 'left':
	// 		coordX = this.length - 1;
	// 		for (let i = 0; i < this.length - 1; i++) {
	// 			this.parts[i].x = -coordX;
	// 			coordX--;
	// 		}
	// 		break;
	// 	case 'up':
	// 		coordY = this.length - 1;
	// 		for (let i = 0; i < this.length - 1; i++) {
	// 			this.parts[i].y = -coordY;
	// 			coordY--;
	// 		}
	// 		break;
	// 	case 'down':
	// 		coordY = this.length - 1;
	// 		for (let i = 0; i < this.length; i++) {
	// 			this.parts[i].y = coordY;
	// 			coordY--;
	// 		}
	// 		break;
	// }
		this.switchDirection(this.direction);

}

Snake.prototype.switchDirection = function (direction) {
	let coordX = 0;
	let coordY = 0;
	
	switch (this.direction) {
		case 'right':
			coordX = this.length - 1;
			this.parts.forEach(function (item, index) {
				return item.x = coordX - index;
			});
			break;
		case 'left':
			// this.parts[0].x === 0 ? coordX = -(this.length - 1) : coordX = this.length - this.parts[0].x;
			coordX = -(this.length - 1);
			this.parts.forEach(function (item, index) {
				return item.x = coordX + index;
			});
			break;
		case 'up':
			coordY = -(this.length - 1);
			// this.parts[0].y === 0 ? coordY = -(this.length - 1) : coordY = this.length - 1 - this.parts[0].y;
			this.parts.forEach(function (item, index) {
				return item.y = coordY + index;
			});
			break;
		case 'down':
			coordY = this.length - 1;
			this.parts.forEach(function (item, index) {
				return item.y = coordY - index;
			});
			break;
	}

};


Snake.prototype.eat = function ({ direction = 'right', length = 1 } = {}) {
	this.length = length;
	if (this.length === 1) {
		this.parts.push(new SnakePart());
		SnakePart.prototype.move();
		this.length = this.parts.length;
		this.head = this.parts[0];
		for (let i = 0; i < this.length; i++) {
			this.parts[i].direction = this.direction;
		}
		this.parts[this.length - 1].x--;
		this.head.x++;
		this.head.y--;
	}
	else {
		this.parts.length === 0 ? this.parts.length = 1 : this.parts.push(new SnakePart());
		this.length++;
	}
};

Snake.prototype.move = function (steps = 1) {
	// this.direction = this.direction;
	this.steps = steps;
	console.log(this.steps);
	// =================================================
	this.switchDirection(this.direction);
	// ==============================================
	let cX = this.parts[0].x;
	let cY = this.parts[0].y;

	switch (this.direction) {
		case 'right':

		// SnakePart.prototype.move(this.steps);
		// this.parts.forEach(function (item, i) {
		// 	item.x = this.x
		// };
		console.log(this.parts);
			this.parts.forEach(function (item, i) {
				item.x += steps;
				// if (i < steps) {
				// 	item.x = cX + steps - i;
				// }
				// else {
				// 	item.x = cX;
				// }
				// item.y = cY;
			});
			console.log(this.parts);
			// for (let i = 0; i < this.length; i++) {
			// 	if (steps > 0) {
			// 		this.parts[i].x = cX + steps;
			// 		this.parts[i].y = cY;
			// 		steps--;
			// 	}
			// 	else {
			// 		this.parts[i].x = this.parts[i - 1].x - 1;
			// 		this.parts[i].y = cY;
			// 	}
			// }
			break;
		case 'left':
		this.parts.forEach(function (item, i) {
			item.x -= steps;
		});
			// for (let i = 0; i < this.length; i++) {
			// 	if (steps > 0) {
			// 		this.parts[i].y = cY;
			// 		this.parts[i].x = cX + i;
			// 		steps--;
			// 	}
			// 	else {
			// 		this.parts[i].y = cY;
			// 		this.parts[i].x = 0;
			// 	}
			// }
			break;
		case 'up':
		this.parts.forEach(function (item, i) {
			item.y -= steps;
		});
			// console.log(cY);
			// console.log(cX);
			// for (let i = 0; i < this.length; i++) {
			// 	if (steps > 0) {
			// 		this.parts[i].y = cY - i;
			// 		this.parts[i].x = cX;
			// 		steps--;
			// 	}
			// 	else {
			// 		this.parts[i].y = this.parts[i - 1].y;
			// 		this.parts[i].x = cX;
			// 	}

			// }
			break;
		case 'down':
		// console.log(this.head.x)

		console.log(this.parts);
		this.parts.filter(function (item, i) {
			return item.x ? item.y = 0 : item.y;
		});
		console.log(this.parts);
		this.parts.forEach(function (elem) {
			elem.y += steps;
		});
		console.log(this.parts);
			// for (let i = 0; i < this.length; i++) {
			// 	if (steps > 0) {
			// 		this.parts[i].y = cY - steps;
			// 		this.parts[i].x = cX;
			// 		cY -= steps;
			// 		steps--;
			// 	}
			// 	else {
			// 		this.parts[i].y = 0;
			// 		cX > 0 ? this.parts[i].x = cX-- : this.parts[i].x = 0;
			// 	}

			// }
			break;
	}
};
let config = {
	direction: 'right',
	length: 5
};
let snake = new Snake(config);
snake.direction = 'right';
			snake.move(2);
			snake.direction = 'down';
			snake.move(2);
console.log(snake);
// let config = {
// 	direction: 'down',
// 	length: 5
// };
// let snake = new Snake(config);

// snake.direction = 'down';
// snake.move(2);
// console.log(snake);
// snake.direction = 'right';
// snake.move(3);
// console.log(snake);
// snake.direction = 'up';
// snake.move(4);
// console.log(snake);
// snake.direction = 'left';
// snake.move(5);
// console.log(snake);

// [
// 	{ x: -2, y: 2 },
// 	{ x: -1, y: 2 },
// 	{ x: 0, y: 2 },
// 	{ x: 1, y: 2 },
// 	{ x: 2, y: 2 }