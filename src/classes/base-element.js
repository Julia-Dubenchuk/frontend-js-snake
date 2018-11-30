export default class BaseElement  {
  constructor ({ x = 0, y = 0, visible = true } = {}) {
    this.x = x;
    this.y = y;
    this.visible = visible;
  }
}
