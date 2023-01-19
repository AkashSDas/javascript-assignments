var input = document.querySelector(".input");

async function copyToClipboard() {
  var value = input.value;
  console.log(value);
  var result = await navigator.clipboard.writeText(value);
  console.log(result);
}

var btn = document.querySelector(".copy-btn");
btn.addEventListener("click", copyToClipboard);
