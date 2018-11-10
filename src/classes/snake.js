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

	let coordX;
	let coordY;

	switch (this.direction) {
		case 'right':
			coordX = this.length - 1;
			for (let i = 0; i < this.length; i++) {
				this.parts[i].x = coordX;
				coordX--;
			}
			break;
		case 'left':
			coordX = this.length - 1;
			for (let i = 0; i < this.length - 1; i++) {
				this.parts[i].x = -coordX;
				coordX--;
			}
			break;
		case 'up':
			coordY = this.length - 1;
			for (let i = 0; i < this.length - 1; i++) {
				this.parts[i].y = -coordY;
				coordY--;
			}
			break;
		case 'down':
			coordY = this.length - 1;
			for (let i = 0; i < this.length; i++) {
				this.parts[i].y = coordY;
				coordY--;
			}
			break;
	}


}

Snake.prototype.eat = function ({ direction = 'right', length = 1 } = {}) {
	this.length = length;
	if (this.length === 1) {
		this.parts.push(new SnakePart());
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
	this.direction = this.direction;

	// =================================================
	let coordX;
	let coordY;

	switch (this.direction) {
		case 'right':
			coordX = this.length - 1;
			for (let i = 0; i < this.length; i++) {
				this.parts[i].x = coordX;
				coordX--;
			}
			break;
		case 'left':
			coordX = this.parts[0].x;
			for (let i = 0; i < this.length; i++) {
				this.parts[i].x = -(coordX - this.length);
				coordX--;
			}
			break;
		case 'up':
			coordY = this.parts[0].y;
			for (let i = 0; i < this.length; i++) {
				this.parts[i].y = coordY;
				coordY++;
			}
			break;
		case 'down':
			coordY = this.length - 1;
			for (let i = 0; i < this.length; i++) {
				this.parts[i].y = coordY;
				coordY--;
			}
			break;
	}

	// ==============================================
	let cX = this.parts[0].x;
	let cY = this.parts[0].y;

	switch (this.direction) {
		case 'right':
			for (let i = 0; i < this.length; i++) {
				if (steps > 0) {
					this.parts[i].x = cX + steps;
					this.parts[i].y = cY;
					steps--;
				}
				else {
					this.parts[i].x = this.parts[i - 1].x - 1;
					this.parts[i].y = cY;
				}
			}
			break;
		case 'left':
			for (let i = 0; i < this.length; i++) {
				if (steps > 0) {
					this.parts[i].y = cY;
					this.parts[i].x = cX + i;
					steps--;
				}
				else {
					this.parts[i].y = cY;
					this.parts[i].x = 0;
				}
			}
			break;
		case 'up':
			for (let i = 0; i < this.length; i++) {
				if (steps > 0) {
					this.parts[i].y = cY + i;
					this.parts[i].x = cX;
					steps--;
				}
				else {
					this.parts[i].y = this.parts[i - 1].y;
					this.parts[i].x = cX;
				}

			}
			break;
		case 'down':
			for (let i = 0; i < this.length; i++) {
				if (steps > 0) {
					this.parts[i].y = cY - steps;
					this.parts[i].x = cX;
					cY -= steps;
					steps--;
				}
				else {
					this.parts[i].y = 0;
					cX > 0 ? this.parts[i].x = cX-- : this.parts[i].x = 0;
				}

			}
			break;
	}
};