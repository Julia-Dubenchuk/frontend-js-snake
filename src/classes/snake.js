import SnakePart from './snake-part';

export default class Snake {
	constructor ({ direction = 'right', length = 0 } = {}) {
		this.direction = direction;
		this.length = length;
		this.parts = [];
		this.arrayPartPositive = function (_x, _y) {
			let i = 0;

			while (i < this.length) {
				this.parts.unshift(new SnakePart(
					{ x: (_x === 0) ? 0 : i, y: (_y === 0) ? 0 : i, direction: this.direction }
				));
				i++;
			}
		};
		this.arrayPartNegative = function (_x, _y) {
			let i = 1;

			while (i <= this.length) {
				this.parts.push(new SnakePart(
					{ x: (_x === 0) ? 0 : _x + i, y: (_y === 0) ? 0 : _y + i, direction: this.direction }
				));
				i++;
			}
		};
		this.getArrayParts = function () {
			switch (this.direction) {
				case 'right':
					this.arrayPartPositive(this.length, 0);
					break;

				case 'left':
					this.arrayPartNegative((-this.length), 0);
					break;
				case 'up':
					this.arrayPartNegative(0, -this.length);
					break;

				case 'down':
					this.arrayPartPositive(0, this.length);
					break;
			}
			return this.parts;
		};
		this.getArrayParts();
		this.head = this.parts[0];
	}

	eat () {

		switch (this.direction) {
			case 'right':
				this.parts.push(new SnakePart(
					{ x: this.parts.length ? this.parts[this.parts.length - 1].x - 1 : -1, direction: this.direction }
				));
				break;
			case 'left':
				this.parts.push(new SnakePart(
					{ x: this.parts.length ? this.parts[this.parts.length - 1].x + 1 : 1, direction: this.direction }
				));
				break;
			case 'up':
				this.parts.push(new SnakePart(
					{ y: this.parts.length ? this.parts[this.parts.length - 1].y + 1 : 1, direction: this.direction }
				));
				break;
			case 'down':
				this.parts.push(new SnakePart(
					{ y: this.parts.length ? this.parts[this.parts.length - 1].y - 1 : -1, direction: this.direction }
				));
				break;
		}
		this.length = this.parts.length;
		this.head = this.parts[0];
	}

	move (steps = 1) {
		let currentSteps = steps;
		let currentItem = this.parts[this.parts.length - 1].y + currentSteps;
		switch (this.direction) {
		  case 'right':
			if (this.head.y === 0) {
			  this.parts.forEach(part => {
				part.direction = this.direction;
				part.move(steps);
			  });
			} else {
			  this.parts.forEach((part, index) => {
				if (index < currentSteps) {
				  part.x += steps;
				  steps--;
				} else {
				  part.x = 0;
				}
				if (currentItem < this.parts[0].y) {
				  this.parts[this.parts.length - 1 - index].y += currentSteps;
				  currentItem = this.parts[this.parts.length - 1 - index].y + currentSteps;
				} else {
					this.parts[this.parts.length - 1 - index].y = this.head.y;
				}
			  });
			}
			break;
		  case 'left':
		  if (this.head.y === 0) {
			  this.parts.forEach(part => {
				  part.direction = this.direction;
				  part.move(steps);
				});
		  } else {
			  this.parts.forEach(part => {
			  part.y = this.head.y;
			  part.x -=steps;
			  steps--;
				});
		  }
			break;
		  case 'up':
		  if (this.head.y === 0) {
			this.parts.forEach(part => {
				part.direction = this.direction;
				part.move(steps);
			  });
		  } else {
			this.parts.forEach((part, index) => {
				part.x = this.head.x;
				this.parts[this.parts.length - 1 - index].y = this.head.y - index;
			  });
		  }
			break;
		  case 'down':
			this.parts.forEach((part, index) => {
			  if (this.parts[0].x === 0) {
				part.direction = this.direction;
				part.move(steps);
			  }
			  else {
				if (index <= steps) {
				  part.y += steps - index;
				  this.parts[this.parts.length - 1 - index].x += steps;
				}
				else {
				  this.parts[this.parts.length - 1 - index].x
					= this.parts[this.parts.length - 1 - index + 1].x;
				}
			  }
			});
			break;
		}
	}
}