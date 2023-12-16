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

const categories = document.querySelectorAll(".categories li");
categories.forEach((category) => {
  category.addEventListener("click", function () {
    showProducts(this.textContent);
  });
});

const showProducts = (category) => {
  const productsContainer = document.querySelector(".products");
  const productInfoContainer = document.getElementById("product-info");

  // Clear previous content
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";

  // Display products for the selected category
  const products = productsData[category];
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `<p>${product.name} - $${product.price}</p>`;
    productItem.addEventListener("click", function () {
      showProductInfo(product);
    });
    productsContainer.appendChild(productItem);
  });
};

const showProductInfo = (product) => {
  const productInfoContainer = document.getElementById("product-info");
  productInfoContainer.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button id="buyBtn">Buy</button>
  `;

  const buyButton = document.getElementById("buyBtn");
  buyButton.addEventListener("click", function () {
    showOrderForm(product);
  });
};

const showOrderForm = (product) => {
  const productInfoContainer = document.getElementById("product-info");
  productInfoContainer.innerHTML = `
    <h2>Order Form</h2>
    <form id="order-form">
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" required>

      <label for="city">City:</label>
      <select id="city" name="city" required>
        <option value="Kyiv">Kyiv</option>
        <option value="Lviv">Lviv</option>
        <option value="Odesa">Odesa</option>
        <option value="Kriviy Rih">Kriviy Rih</option>
      </select>

      <label for="deliveryPoint">Delivery Point (Nova Poshta):</label>
      <input type="text" id="deliveryPoint" name="deliveryPoint" required>

      <label for="paymentMethod">Payment Method:</label>
      <select id="paymentMethod" name="paymentMethod" required>
        <option value="CashOnDelivery">Cash on Delivery</option>
        <option value="CreditCard">Credit Card</option>
        
      </select>

      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value="1" min="1" required>

      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment" rows="4"></textarea>

      <button type="button" id="submitOrderBtn">Submit Order</button>
    </form>
  `;

  const submitOrderBtn = document.getElementById("submitOrderBtn");
  submitOrderBtn.addEventListener("click", function () {
    submitOrder(product);
  });
};

const submitOrder = (product) => {
  const orderForm = document.getElementById("order-form");
  const fullName = orderForm.elements.fullName.value;
  const city = orderForm.elements.city.value;
  const deliveryPoint = orderForm.elements.deliveryPoint.value;
  const paymentMethod = orderForm.elements.paymentMethod.value;
  const quantity = orderForm.elements.quantity.value;
  const comment = orderForm.elements.comment.value;

  alert(
    `Order submitted!\n\nProduct: ${product.name}\nQuantity: ${quantity}\n\nShipping to:\n${fullName}\n${city}\nDelivery Point: ${deliveryPoint}\nPayment Method: ${paymentMethod}\n\nComment: ${comment}`
  );

  const productsContainer = document.querySelector(".products");
  const productInfoContainer = document.getElementById("product-info");
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";
};
