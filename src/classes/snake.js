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
	this.chooseDirection();

}

Snake.prototype.chooseDirection = function () {
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
			if (!this.head.y) {
				coordX = -(this.length - 1);
				this.parts.forEach(function (item, index) {
					return item.x = coordX + index;
				});
			}
			break;
		case 'up':
			if (!this.head.x) {
				coordY = -(this.length - 1);
				this.parts.forEach(function (item, index) {
					return item.y = coordY + index;
				});
			}
			break;
		case 'down':
			coordY = this.length - 1;
			this.parts.forEach(function (item, index) {
				return item.y = coordY - index;
			});
			break;
	}

};
Snake.prototype.eat = function ({ length = 1 } = {}) {
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
	this.chooseDirection();
	if (this.parts[0].x !== 0 && this.parts[0].y !== 0) {
		this.turn(steps);
	}
	else {
		this.direct(steps);
	}
};
Snake.prototype.direct = function (steps) {
	switch (this.direction) {
		case 'right':
			this.parts.forEach(function (part) {
				part.x += steps;
			});
			break;
		case 'left':
			this.parts.forEach(function (part) {
				part.x -= steps;
			});
			break;
		case 'up':
			this.parts.forEach(function (part) {
				part.y -= steps;
			});
			break;
		case 'down':
			this.parts.forEach(function (part) {
				part.y += steps;
			});
			break;
	}
};
Snake.prototype.turn = function (steps) {
	let lengthParts = this.length - 1;
	let difference = this.length - steps;

	switch (this.direction) {
		case 'left':
			this.parts.forEach(function (part, i, parts) {
				part.x -= lengthParts - i;
				part.y = parts[0].y;
			});
			break;
		case 'up':
			this.parts.forEach(function (part, i, parts) {
				if (i) {
					part.y = parts[i - 1].y + 1;
					part.x = parts[0].x;
				}
				else {
					part.y -= steps;
				}
			});
			break;
		case 'down':
			this.parts.forEach(function (part, i, parts) {
				if (i <= steps) {
					part.y -= steps;
					parts[lengthParts - i].x += steps;
				}
				else {
					part.y = parts[i - 1].y;
					parts[lengthParts - i].x = parts[lengthParts - i + 1].x;

				}
			});
			break;
		default:
			this.parts.forEach(function (part, i, parts) {
				if (i < steps) {
					part.x -= difference;
					part.y = parts[0].y;
				}
				else {
					part.x = parts[i - 1].x;
					part.y = parts[i - 1].y - 1;
				}
			});
			break;
	}
};