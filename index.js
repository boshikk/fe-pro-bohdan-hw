const productsData = {
  Electronics: [
    { name: "Laptop", price: 800 },
    { name: "Smartphone", price: 500 },
    { name: "Headphones", price: 80 },
  ],
  Clothing: [
    { name: "T-Shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Jacket", price: 120 },
  ],
  Books: [
    { name: "Programming Basics", price: 30 },
    { name: "Science Fiction Novel", price: 15 },
    { name: "History Book", price: 25 },
  ],
};

const showProductsFunc = () => {
  showProducts(this.textContent);
};

const categories = document.querySelectorAll(".categories li");
categories.forEach((category) => {
  category.addEventListener("click", () => showProducts(category.textContent));
});

const showProducts = (category) => {
  const productsContainer = document.querySelector(".products");
  const productInfoContainer = document.getElementById("productInfo");

  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";

  const products = productsData[category];
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `<p>${product.name} - $${product.price}</p>`;
    productItem.addEventListener("click", () => showProductInfo(product));
    productsContainer.appendChild(productItem);
  });
};

const showProductInfo = (product) => {
  const productInfoContainer = document.getElementById("productInfo");
  productInfoContainer.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button id="buyBtn">Buy</button>
  `;

  const buyButton = document.getElementById("buyBtn");
  buyButton.addEventListener("click", () => buyProduct(product.name));
};

const buyProduct = (productName) => {
  alert(`You have successfully purchased ${productName}!`);
  const productsContainer = document.querySelector(".products");
  const productInfoContainer = document.getElementById("productInfo");
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";
};
