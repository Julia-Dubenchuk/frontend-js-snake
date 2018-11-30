import BaseElement from './base-element';

export default function Food ({ x = 0, y = 0, visible = true } = {}) {
	BaseElement.apply(this, arguments);
}

Food.prototype = new BaseElement();

Food.prototype.feed = function () {
	this.visible = false;
};