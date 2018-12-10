import BaseElement from '../../src/classes/base-element';

describe('Base Element', function () {
	describe('interface has a', function () {
		let element = new BaseElement();

		it('property "x"', function () {
			expect(element.x).toBeDefined();
		});
		it('property "y"', function () {
			expect(element.y).toBeDefined();
		});
		it('property "visible"', function () {
			expect(element.visible).toBeDefined();
		});
	});

	it('property "visible" is `true` by default', function () {
		let element = new BaseElement();

		expect(element.visible).toBe(true);
	});

	it('has {x:0, y:0} coordinates by default', function () {
		let element = new BaseElement();

		expect(element.x).toBe(0);
		expect(element.y).toBe(0);
	});

	describe('config argument correctly affects a', function () {
		let config = {
			x: 774,
			y: 88,
			visible: false
		};
		let element = new BaseElement(config);

		it('property "x"', function () {
			expect(element.x).toEqual(config.x);
		});
		it('property "y"', function () {
			expect(element.y).toEqual(config.y);
		});
		it('property "visible"', function () {
			expect(element.visible).toEqual(config.visible);
		});
	});
});