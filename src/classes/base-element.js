export default function BaseElement({x = 0, y = 0, visible = true} = {}) {
	this.x = x;
	this.y = y;
	this.visible = visible;
}