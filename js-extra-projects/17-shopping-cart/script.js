// Items
var items = [
  { emoji: "🍎", name: "Apple", price: 0.5, quantity: 10 },
  { emoji: "🍌", name: "Banana", price: 0.75, quantity: 5 },
  { emoji: "🍇", name: "Grapes", price: 1.5, quantity: 3 },
  { emoji: "🍉", name: "Watermelon", price: 2.5, quantity: 2 },
  { emoji: "🍍", name: "Pineapple", price: 3.5, quantity: 1 },
  { emoji: "🍓", name: "Strawberry", price: 4.5, quantity: 1 },
  { emoji: "🍒", name: "Cherry", price: 5.5, quantity: 1 },
  { emoji: "🍑", name: "Peach", price: 6.5, quantity: 1 },
  { emoji: "🍈", name: "Melon", price: 7.5, quantity: 1 },
  { emoji: "🍐", name: "Pear", price: 8.5, quantity: 1 },
  { emoji: "🍋", name: "Lemon", price: 9.5, quantity: 1 },
  { emoji: "🍊", name: "Orange", price: 10.5, quantity: 1 },
  { emoji: "🍅", name: "Tomato", price: 11.5, quantity: 1 },
  { emoji: "🍆", name: "Eggplant", price: 12.5, quantity: 1 },
  { emoji: "🍄", name: "Mushroom", price: 13.5, quantity: 1 },
  { emoji: "🥕", name: "Carrot", price: 14.5, quantity: 1 },
  { emoji: "🥔", name: "Potato", price: 15.5, quantity: 1 },
  { emoji: "🥒", name: "Cucumber", price: 16.5, quantity: 1 },
];

// Cart
var cart = [];

// Add/remove to cart utility. action can be "add" or "remove"
function updateCart(item, action) {
  if (action == "add") {
    // Check if the item is already in the cart
    var itemInCart = cart.find(function (cartItem) {
      return cartItem.name == item.name;
    });

    if (itemInCart == undefined) {
      // Add item to the cart
      cart.push({
        name: item.name,
        emoji: item.emoji,
        price: item.price,
        quantity: 1,
      });
      items = items.map(function decrementQuantity(product) {
        if (product.name == item.name) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    } else {
      // Increment quantity
      cart.map(function incrementQuantity(cartItem, idx) {
        if (item.name == cartItem.name) {
          handleQuantityChange(item, "increment");
        }
      });
    }

    renderCartItems();
    renderItems();
  }
}

// Handle quantity increment/decrement
function handleQuantityChange(item, action) {
  var inCart = cart.find(function (cartItem) {
    return cartItem.name == item.name;
  });
  if (inCart == undefined) return;

  if (action == "increment") {
    if (item.quantity == 0) return;
    cart = cart.map(function incrementQuantity(product) {
      if (item.name == product.name) {
        product.quantity++;

        items = items.map(function decrementQuantity(product) {
          if (product.name == item.name) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
      }
      return product;
    });
    renderCartItems();
    renderItems();
  } else if (action == "decrement") {
    let rmItems = [];
    cart = cart.map(function decrementQuantity(product) {
      if (item.name == product.name) {
        product.quantity--;

        items = items.map(function incrementQuantity(product) {
          if (product.name == item.name) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });

        if (product.quantity == 0) {
          rmItems.push(product);
          return product;
        }
      }
      return product;
    });
    cart = cart.filter(function (product) {
      return !rmItems.includes(product);
    });
    renderCartItems();
    renderItems();
  }
}

// =============================
// ELEMENTS
// =============================

function createItemElement(item) {
  var element = document.createElement("div");
  element.classList.add("item");

  // Info
  var info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `
    <span class="emoji">${item.emoji}</span>
    <span class="name">${item.name}</span>
    <span class="meta-info">
        (<span>$${item.price}</span> | <span>${item.quantity}</span>)
    </span>
  `;

  // Add to cart button
  var addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("add-to-cart");
  addToCartBtn.innerHTML = "🚛 +";
  addToCartBtn.addEventListener("click", function addToCart() {
    updateCart(item, "add");
  });

  // Append
  element.appendChild(info);
  element.appendChild(addToCartBtn);

  return element;
}

// Render items
function renderItems() {
  var itemsContainer = document.querySelector(".items");
  itemsContainer.innerHTML = "";
  items.forEach(function (item) {
    var element = createItemElement(item);
    itemsContainer.appendChild(element);
  });
}
renderItems();

function createCartItemElement(item) {
  var element = document.createElement("div");
  element.classList.add("item");

  // Info
  var info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `
    <span class="emoji">${item.emoji}</span>
    <span>${item.name}</span>
    <span class="meta-info">
        (<span>${item.price}</span> | <span>${item.quantity}</span>)
    </span>
  `;

  // Add, increment/decrement buttons
  var btns = document.createElement("div");
  btns.classList.add("btns");
  var addBtn = document.createElement("button");
  var removeBtn = document.createElement("button");
  var deleteBtn = document.createElement("button");
  addBtn.innerHTML = "+";
  removeBtn.innerHTML = "-";
  deleteBtn.innerHTML = "🗑";
  btns.appendChild(addBtn);
  btns.appendChild(removeBtn);
  btns.appendChild(deleteBtn);

  addBtn.addEventListener("click", function incrementQuantity() {
    handleQuantityChange(
      items.find(function getItem(product) {
        if (product.name == item.name) return product;
      }),
      "increment"
    );
  });
  removeBtn.addEventListener("click", function decrementQuantity() {
    handleQuantityChange(
      items.find(function getItem(product) {
        if (product.name == item.name) return product;
      }),
      "decrement"
    );
  });
  deleteBtn.addEventListener("click", function deleteItem() {
    cart = cart.filter(function removeItem(cartItem) {
      items = items.map(function addBackQuantity(product) {
        if (product.name == item.name) product.quantity += item.quantity;
        return product;
      });
      return cartItem.name != item.name;
    });
    renderCartItems();
    renderItems();
  });

  // Append
  element.appendChild(info);
  element.appendChild(btns);

  return element;
}

// Render cart items
function renderCartItems() {
  var itemsContainer = document.querySelector(".cart");
  itemsContainer.innerHTML = "";

  cart.forEach(function (item) {
    var element = createCartItemElement(item);
    itemsContainer.appendChild(element);
  });
}
renderCartItems();
