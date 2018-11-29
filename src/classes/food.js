import BaseElement from './base-element';

export default class Food extends BaseElement {
  feed() {
    this.visible = false;
  }
}