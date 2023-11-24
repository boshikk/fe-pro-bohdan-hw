class A {
  read() {
    console.log("Reading...");
  }
}

class B extends A {
  close() {
    console.log("Closing...");
  }
}

const instanceB = new B();

console.log(instanceB);

console.log("read" in instanceB);
console.log("close" in instanceB);

console.log(instanceB.hasOwnProperty("read"));
console.log(instanceB.hasOwnProperty("close"));

const keys = Object.keys(instanceB);
console.log(keys);
