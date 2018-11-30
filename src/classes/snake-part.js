import BaseElement from './base-element';

export default function SnakePart ({ x = 0, y = 0, visible = true, direction = 'right' } = {}) {
	this.direction = direction;
	BaseElement.apply(this, arguments);
}

SnakePart.prototype = new BaseElement();

SnakePart.prototype.move = function (steps = 0) {
	switch (this.direction) {
		case 'right':
			this.x += steps;
			break;
		case 'left':
			this.x -= steps;
			break;
		case 'up':
			this.y -= steps;
			break;
		case 'down':
			this.y += steps;
			break;
	}
};