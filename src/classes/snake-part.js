import BaseElement from './base-element';

export default class SnakePart extends BaseElement {
  constructor (direction = 'right') {
    super();
    this.direction = direction;
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