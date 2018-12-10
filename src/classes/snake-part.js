import BaseElement from './base-element';

export default class SnakePart extends BaseElement {
  constructor(elements = { x: 0, y: 0, isVisible: true, direction: 'right' }) {
    super(elements);
    this.direction = elements.direction;
  }
  move(steps = 0) {
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
  }
}
