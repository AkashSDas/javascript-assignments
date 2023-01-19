// 1.
(function webDev() {
  var title = document.querySelector(
    ".side-bar .crayons-card .crayons-subtitle-2"
  );
  var description = document.querySelector(".side-bar .crayons-card p");

  title.innerText = "AkashSDas";
  description.innerHTML = "Be effective and efficient";
})();

// 2.
(function apple() {
  var products = [];
  var itemsElement = document.querySelectorAll(".as-imagegrid-item");

  itemsElement.forEach(function filter(item) {
    products.push(item.innerText.replace("\nSupport", ""));
  });

  console.log(products);
})();

// 3.
(function youtube() {
  var element = document.createElement("section");
  element.innerHTML = "Share your data with unknown third party";
  document.querySelector(".accordion-homepage").appendChild(element);
})();

// 4.
(function oneplus() {
  var element = document.querySelector(".customer-support .service-number");
  element.innerText = "+73 1234567890";
})();

// 5.
(function samsung() {
  let btn = document.querySelector(".feature-column-carousel__button .cta");
  btn.setAttribute("id", "checkO");
  document.getElementById("checkO").innerText = "Check Out";
})();

// 6.
(function adidas() {
  function changeBg() {
    var bg = document.querySelector(".searchinput___zXLAR");
    bg.style.backgroundColor = "red";
  }

  document.addEventListener("mouseover", changeBg);
});

// 7.
(function mdn() {
  function searchText(text) {
    var input = document.querySelector("#top-nav-search-input");
    var btn = document.querySelector(".search-form");
    input.value = text;
    btn.submit();
  }

  searchText("Developers");
})();

// 8.
(function google() {
  let elements = document.querySelectorAll("#SIvCob a");

  [...elements].forEach((element) => {
    var langs = ["தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"];
    if (langs.includes(element.innerText)) element.remove();
  });
})();

// 9.
(function codeWars() {
  var heading = document.querySelector(
    ".content-width-extra-large .display-heading-1"
  );
  heading.style.fontFamily = "serif";
  heading.style.color = "#8B2E1D";
})();

// 10.
(function freeCodeCamp() {
  function changeBg() {
    var element = document.querySelector(".btn-cta-big .login-btn-text");
    element.style.backgroundColor = "red";
  }

  document.addEventListener("click", changeBg);
})();

// 11.
(function realme() {
  var logo = document.querySelector(".wrapper .gtag .icon-logo");
  const bg = "url(https://ineuron.ai/images/ineuron-logo.png)";
  logo.style.backgroundImage = bg;
})();

// 12.
(function github() {
  var btn = document.querySelector(".js-repos-container h2 a");
  btn.style.backgroundColor = "blue";
})();

// 13.
(function hackerrank() {
  var element = document.querySelector(".fl-module ");
  element.textContent = "JSBOOTCAMP";
})();

// 14.
(function asus() {
  var element = document.querySelector(".HotDealsAll__Heading__2fIbe");
  element.style.fontSize = "100px";
})();

// 15.
(function dell() {
  document.querySelector(".ps-title a").style.textAlign = "right";
})();

// 16.
(function vercel() {
  var element = document.querySelector(".section-title_title__VEDfK");
  element.innerHTML = "Start with Scratch";
})();

// 17.
(function sony() {
  document.querySelector(".btn-container a").innerHTML = new Date();
})();

// 18.
(function philips() {
  document.querySelector(".p-footer").style.backgroundColor = "orange";
})();

// 19.
(function canon() {
  document.querySelector(".logo").getAttribute("src");
})();

// 20.
(function oppo() {
  document.querySelector(".section-box .desc").style.color = "orange";
})();
