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

	this.switchDirection();

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
			coordX = -(this.length - 1);
			this.parts.forEach(function (item, index) {
				return item.x = coordX + index;
			});
			break;
		case 'up':
			coordY = -(this.length - 1);
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
	this.switchDirection(this.direction);
	console.log(!this.parts[0].x);
	if (this.parts[0].x !== 0 && this.parts[0].y !== 0) {
		this.arrowSnake(steps);
		console.log(this.parts);
	}
	else {
		this.lineSnake(steps);
		console.log(this.parts);
	}
};
Snake.prototype.lineSnake = function (steps) {
	console.log(this.direction);
	switch (this.direction) {
		case 'right':
			console.log(this.parts);
			this.parts.forEach(function (item, i) {
				item.x += steps;
			});
			console.log(this.parts);
			break;
		case 'left':
			this.parts.forEach(function (item, i) {
				item.x -= steps;
			});
			break;
		case 'up':
			this.parts.forEach(function (item, i) {
				item.y -= steps;
			});
			break;
		case 'down':
		// console.log(this.head.x)

			console.log(this.parts);
			this.parts.forEach(function (item, i) {
				item.y += steps;
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
Snake.prototype.arrowSnake = function (steps) {
	console.log(this.direction);
	switch (this.direction) {
		case 'right':

		// SnakePart.prototype.move(this.steps);
		// this.parts.forEach(function (item, i) {
		// 	item.x = this.x
		// };
			console.log(this.parts);
			this.parts.forEach(function (item, i) {
				item.x -= 1;

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
			let count = this.length - 1;

			console.log(this.parts);
		 this.parts.forEach(function (elem, i, parts) {
				if (i <= steps) {
					elem.y -= steps;
					console.log(elem.y);
					parts[count - i].x += steps;
				}
				else {
					elem.y = parts[i - 1].y;
					parts[count - i].x = parts[count - i + 1].x;

				}
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

// function isCoordXY () {
// 	switch(this.direction) {
// 		case 'right':
// 		this.parts.forEach(function (item, i) {
// 			item.x += this.steps;
// 		});
// 		break;

// 		case 'left':
// 		this.parts.forEach(function (item, i) {
// 			item.x -= this.steps;
// 		});
// 		break;

// 		case 'up':
// 		this.parts.forEach(function (item, i) {
// 			item.x += this.steps;
// 		});
// 		break;

// 		case 'down':
// 		break;
// 	}
// }
let config = {
	direction: 'down',
	length: 5
};
let snake = new Snake(config);

snake.direction = 'down';
snake.move(2);

snake.direction = 'right';
snake.move(3);
// snake.direction = 'up';
// snake.move(4);
// snake.direction = 'left';
// snake.move(5);
// snake.direction = 'right';
// snake.move(3);
// snake.direction = 'up';
// snake.move(4);
// snake.direction = 'left';
// snake.move(5);
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