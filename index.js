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
  const productInfoContainer = document.querySelector(".product-info");

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
  const productInfoContainer = document.querySelector(".product-info");
  productInfoContainer.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button class="buy-btn">Buy</button>
  `;

  const buyButton = document.querySelector(".buy-btn");
  buyButton.addEventListener("click", function () {
    showOrderForm(product);
  });
};

const showOrderForm = (product) => {
  const productInfoContainer = document.querySelector(".product-info");
  productInfoContainer.innerHTML = `
    <h2>Order Form</h2>
    <form class="order-form">
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

      <button type="button" class="submit-order-btn">Submit Order</button>
    </form>
  `;

  const submitOrderBtn = document.querySelector(".submit-order-btn");
  submitOrderBtn.addEventListener("click", function () {
    submitOrder(product);
  });
};

const submitOrder = (product) => {
  const orderForm = document.querySelector(".order-form");
  const fullName = orderForm.elements.fullName.value;
  const city = orderForm.elements.city.value;
  const deliveryPoint = orderForm.elements.deliveryPoint.value;
  const paymentMethod = orderForm.elements.paymentMethod.value;
  const quantity = orderForm.elements.quantity.value;
  const comment = orderForm.elements.comment.value;

  // Save the order to localStorage
  saveOrderToLocalStorage(
    product,
    fullName,
    city,
    deliveryPoint,
    paymentMethod,
    quantity,
    comment
  );

  alert(
    `Order submitted!\n\nProduct: ${product.name}\nQuantity: ${quantity}\n\nShipping to:\n${fullName}\n${city}\nDelivery Point: ${deliveryPoint}\nPayment Method: ${paymentMethod}\n\nComment: ${comment}`
  );

  const productsContainer = document.querySelector(".products");
  const productInfoContainer = document.querySelector(".product-info");
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";
};

const saveOrderToLocalStorage = (
  product,
  fullName,
  city,
  deliveryPoint,
  paymentMethod,
  quantity,
  comment
) => {
  // Retrieve existing orders from localStorage
  const existingOrders = JSON.parse(localStorage.getItem("userOrders")) || [];

  // Create a new order object
  const newOrder = {
    product: product.name,
    quantity: quantity,
    fullName: fullName,
    city: city,
    deliveryPoint: deliveryPoint,
    paymentMethod: paymentMethod,
    comment: comment,
    date: new Date().toLocaleString(),
    price: product.price * quantity,
  };

  // Add the new order to the existing orders
  existingOrders.push(newOrder);

  // Save the updated orders to localStorage
  localStorage.setItem("userOrders", JSON.stringify(existingOrders));
};

const myOrdersBtn = document.querySelector(".my-orders-btn");
myOrdersBtn.addEventListener("click", showUserOrders);

function showUserOrders() {
  const productsContainer = document.querySelector(".products");
  const productInfoContainer = document.querySelector(".product-info");
  const ordersContainer = document.querySelector(".orders-container");

  // Hide product-related containers
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";

  // Show user orders
  const userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];

  // Display user orders
  ordersContainer.innerHTML = "<h2>My Orders</h2>";
  if (userOrders.length > 0) {
    userOrders.forEach((order, index) => {
      const orderItem = document.createElement("div");
      orderItem.innerHTML = `<p>Date: ${order.date} - Price: $${order.price} <button class="delete-order-btn" data-index="${index}">Delete</button></p>`;
      orderItem.addEventListener("click", function () {
        showOrderDetails(order);
      });
      ordersContainer.appendChild(orderItem);
    });

    // Add event listeners for delete buttons
    const deleteOrderBtns = document.querySelectorAll(".delete-order-btn");
    deleteOrderBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from triggering the order details display
        deleteOrder(event.target.dataset.index);
      });
    });
  } else {
    ordersContainer.innerHTML += "<p>No orders available.</p>";
  }
}

function showOrderDetails(order) {
  const ordersContainer = document.querySelector(".orders-container");
  ordersContainer.innerHTML += `<p>Order Details:<br>
    Product: ${order.product}<br>
    Quantity: ${order.quantity}<br>
    Full Name: ${order.fullName}<br>
    City: ${order.city}<br>
    Delivery Point: ${order.deliveryPoint}<br>
    Payment Method: ${order.paymentMethod}<br>
    Comment: ${order.comment}
    </p>`;
}

function deleteOrder(index) {
  // Retrieve existing orders from localStorage
  const existingOrders = JSON.parse(localStorage.getItem("userOrders")) || [];

  // Remove the order at the specified index
  existingOrders.splice(index, 1);

  // Save the updated orders to localStorage
  localStorage.setItem("userOrders", JSON.stringify(existingOrders));

  // Refresh the displayed user orders
  showUserOrders();
}
