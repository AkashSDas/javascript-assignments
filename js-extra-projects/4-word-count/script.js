var input = document.querySelector(".input");

async function wordCount() {
  var words = input.value.split(" ").map(function handleNextLine(word) {
    if (word.includes("\n")) {
      word = word.split(" ")[0].split("\n").join("</br>");
    }
    return word;
  });
  var filteredWords = [];
  words.forEach(function filterWord(word) {
    word.split("</br>").forEach(function addWord(w) {
      if (w !== "") {
        filteredWords.push(w);
      }
    });
  });

  var count = filteredWords.length;
  document.querySelector(".count").textContent = count;
}

(function initEventListener() {
  input.addEventListener("input", wordCount);
})();
