class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };

  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };

  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  };

  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };

  static TOPPING_SPICE = {
    price: 15,
    calories: 0,
  };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce(
      (sum, topping) => sum + topping.calories,
      0
    );
    return `Total calories are: ${baseCalories + toppingsCalories}`;
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce(
      (sum, topping) => sum + topping.price,
      0
    );
    return `Total price is: ${basePrice + toppingsPrice}`;
  }
}

const smallHamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

console.log(smallHamburger);
smallHamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(smallHamburger);
console.log(smallHamburger.calculatePrice());
console.log(smallHamburger.calculateCalories());
smallHamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(smallHamburger.calculatePrice());
console.log(smallHamburger.calculateCalories());
