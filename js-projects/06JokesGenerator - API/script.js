var jokeBtn = document.getElementById("jokeBtn");
var joke = document.getElementById("joke");

// Using Async Await
async function generateJoke() {
  var config = { headers: { Accept: "application/json" } };
  var res = await fetch("https://icanhazdadjoke.com", config);
  var data = await res.json();
  joke.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke);
generateJoke();
