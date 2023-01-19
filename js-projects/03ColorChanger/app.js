var button = document.getElementById("button");
var canvas = document.getElementById("canvas");
var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
];
var colorIndex = 0;

button.addEventListener("click", function () {
  canvas.style.backgroundColor = colors[colorIndex];
  colorIndex++;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
});
