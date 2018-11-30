import Food from '../../src/classes/food';
import BaseElement from '../../src/classes/base-element';

describe('Food', function () {
  describe('interface has a', function () {
    let food = new Food();

    it('method "feed()"', function () {
      expect(food.feed).toBeDefined();
    });
  });

  describe('recieves a', function () {
    let food = new Food();

    it('property "x" from a Base Element', function () {
      expect(food.x).toBeDefined();
    });
    it('property "y" from a Base BaseElement', function () {
      expect(food.y).toBeDefined();
    });
    it('property "visible" from a Base Element', function () {
      expect(food.visible).toBeDefined();
    });
  });

  it('is instance of a Base Element', function () {
    let food = new Food();

    expect(food instanceof BaseElement).toBe(true);
  });

  it('property "visible" is `true` by default', function () {
    let food = new Food();

    expect(food.visible).toBe(true);
  });

  it('has {x:0, y:0} coordinates by default', function () {
    let food = new Food();

    expect(food.x).toBe(0);
    expect(food.y).toBe(0);
  });

  describe('config argument correctly affects a', function () {
    let config = {
      x: 774,
      y: 88,
      visible: false
    };
    let food = new Food(config);

    it('property "x"', function () {
      expect(food.x).toEqual(config.x);
    });
    it('property "y"', function () {
      expect(food.y).toEqual(config.y);
    });
    it('property "visible"', function () {
      expect(food.visible).toEqual(config.visible);
    });
  });

  it('sets "visible" to `false`, when call "feed()"', function () {
    let food = new Food();

    food.feed();
    expect(food.visible).toBe(false);
  });

});
