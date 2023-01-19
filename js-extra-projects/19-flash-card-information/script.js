var input = document.querySelector(".input-text");
var textOutput = document.querySelector(".output-text");

(function initEventListeners() {
  input.addEventListener("input", function inputChangeEventListener() {
    var words = input.value.split(" ").map(function handleNextLine(word) {
      if (word.includes("\n")) {
        word = word.split(" ")[0].split("\n").join("</br>");
      }
      return word;
    });

    textOutput.innerHTML = `<p>${words.join(" ")}</p>`;
  });
})();

// Make the height of text area dynamic
(function initTextAreaHeight() {
  input.addEventListener("input", function inputChangeEventListener() {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  });
})();
