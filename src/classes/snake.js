import SnakePart from "./snake-part";

export default function Snake(length = 0, direction = "right") {
	this.length = length;
	this.direction = direction;
	this.parts = parts;
	this.head = head;
	this.length = length;
}

Snake.prototype.parts = new SnakePart();

Snake.prototype.eat = function() {

};

Snake.prototype.move = function(steps = 1) {

};