var foodData = [
  { emoji: "🍎", name: "Apple" },
  { emoji: "🍏", name: "Green Apple" },
  { emoji: "🍐", name: "Pear" },
  { emoji: "🍊", name: "Tangerine" },
  { emoji: "🍋", name: "Lemon" },
  { emoji: "🍌", name: "Banana" },
  { emoji: "🍉", name: "Watermelon" },
  { emoji: "🍇", name: "Grapes" },
  { emoji: "🍓", name: "Strawberry" },
  { emoji: "🍈", name: "Melon" },
  { emoji: "🍒", name: "Cherries" },
  { emoji: "🍑", name: "Peach" },
  { emoji: "🍍", name: "Pineapple" },
  { emoji: "🥝", name: "Kiwi Fruit" },
  { emoji: "🥑", name: "Avocado" },
  { emoji: "🍅", name: "Tomato" },
  { emoji: "🍆", name: "Eggplant" },
  { emoji: "🥒", name: "Cucumber" },
  { emoji: "🥕", name: "Carrot" },
  { emoji: "🌽", name: "Ear of Corn" },
  { emoji: "🌶", name: "Hot Pepper" },
  { emoji: "🥔", name: "Potato" },
  { emoji: "🍠", name: "Roasted Sweet Potato" },
  { emoji: "🌰", name: "Chestnut" },
  { emoji: "🥜", name: "Peanuts" },
  { emoji: "🍯", name: "Honey Pot" },
  { emoji: "🥐", name: "Croissant" },
  { emoji: "🍞", name: "Bread" },
  { emoji: "🥖", name: "Baguette Bread" },
  { emoji: "🧀", name: "Cheese Wedge" },
  { emoji: "🥚", name: "Egg" },
  { emoji: "🍳", name: "Cooking" },
  { emoji: "🥓", name: "Bacon" },
  { emoji: "🥞", name: "Pancakes" },
  { emoji: "🍤", name: "Fried Shrimp" },
  { emoji: "🍗", name: "Poultry Leg" },
  { emoji: "🍖", name: "Meat on Bone" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🌭", name: "Hot Dog" },
  { emoji: "🍔", name: "Hamburger" },
  { emoji: "🍟", name: "French Fries" },
  { emoji: "🥙", name: "Stuffed Flatbread" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🌯", name: "Burrito" },
  { emoji: "🥗", name: "Green Salad" },
  { emoji: "🥘", name: "Shallow Pan of Food" },
  { emoji: "🍝", name: "Spaghetti" },
  { emoji: "🍜", name: "Steaming Bowl" },
  { emoji: "🍲", name: "Pot of Food" },
  { emoji: "🍥", name: "Fish Cake with Swirl" },
  { emoji: "🍣", name: "Sushi" },
  { emoji: "🍱", name: "Bento Box" },
  { emoji: "🍛", name: "Curry Rice" },
  { emoji: "🍚", name: "Cooked Rice" },
  { emoji: "🍙", name: "Rice Ball" },
  { emoji: "🍘", name: "Rice Cracker" },
  { emoji: "🍢", name: "Oden" },
  { emoji: "🍡", name: "Dango" },
  { emoji: "🍧", name: "Shaved Ice" },
  { emoji: "🍨", name: "Ice Cream" },
  { emoji: "🍦", name: "Soft Ice Cream" },
  { emoji: "🍰", name: "Shortcake" },
  { emoji: "🎂", name: "Birthday Cake" },
  { emoji: "🍮", name: "Custard" },
  { emoji: "🍭", name: "Lollipop" },
  { emoji: "🍬", name: "Candy" },
  { emoji: "🍫", name: "Chocolate Bar" },
  { emoji: "🍿", name: "Popcorn" },
  { emoji: "🍩", name: "Doughnut" },
  { emoji: "🍪", name: "Cookie" },
];

(function loadInitialFoodData() {
  displayFoodData(foodData);
})();

function displayFoodData(data) {
  // Clear the list
  var list = document.querySelector(".suggestion-list");
  list.innerHTML = "";

  if (data.length == 0) {
    var listItem = document.createElement("li");
    listItem.classList.add("suggestion-item");
    listItem.textContent = "🤷🏻‍♂️ No results found";
    list.appendChild(listItem);
    return;
  }

  // Add new list items
  for (let food of data) {
    let listItem = document.createElement("div");
    listItem.classList.add("suggestion-item");
    listItem.innerHTML = `
      <span class="emoji">${food.emoji}</span>
      <span class="name">${food.name}</span>
    `;
    console.log(listItem);
    list.appendChild(listItem);
  }
}

// Get user search input
function getUserInput() {
  var input = document.querySelector(".search-input");
  return input.value;
}

// Filter foodData based on user input
function filterFoodData() {
  var userInput = getUserInput();
  var filteredData = foodData.filter((food) => {
    return food.name.toLowerCase().includes(userInput.toLowerCase());
  });
  displayFoodData(filteredData);
}

(function initSearchChangerListener() {
  var input = document.querySelector(".search-input");
  input.addEventListener("input", filterFoodData);
})();
