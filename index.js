class Hamburger {
  constructor(size, filling) {
    this.size = size;
    if (this.size === "small") {
      this.price = 50;
      this.calories = 20;
    } else if (this.size === "big") {
      this.price = 100;
      this.calories = 40;
    }
    this.filling = filling;
    if (this.filling === "cheese") {
      this.price += 10;
      this.calories += 20;
    } else if (this.filling === "salad") {
      this.price += 20;
      this.calories += 5;
    } else if (this.filling === "fries") {
      this.price += 15;
      this.calories += 10;
    }
  }

  addTopping(topping) {
    this.topping = topping;
    if (this.topping === "mayo") {
      this.price += 20;
      this.calories += 10;
    } else if (this.topping === "herbs") {
      this.price += 15;
    }
  }

  calculatePrice() {
    console.log(`Price: ${this.price}`);
  }

  calculateCalories() {
    console.log(`Calories: ${this.calories}`);
  }
}

const fillings = ["cheese", "salad", "fries"];

const smallHamburger = new Hamburger("small", fillings[0]);
smallHamburger.addTopping("mayo");
smallHamburger.addTopping("mayo");
smallHamburger.calculateCalories();
smallHamburger.calculatePrice();
smallHamburger.addTopping("herbs");
smallHamburger.calculateCalories();
smallHamburger.calculatePrice();

const bigHamburger = new Hamburger("big", fillings[2]);
bigHamburger.calculateCalories();
bigHamburger.calculatePrice();
bigHamburger.addTopping("mayo");
bigHamburger.calculateCalories();
bigHamburger.calculatePrice();
