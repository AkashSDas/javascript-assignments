var people = {
  disney: "Walt Disney",
  churchill: "Winston Churchill",
  franklin: "Benjamin Franklin",
  lincoln: "Abraham Lincoln",
  jobs: "Steve Jobs",
  ford: "Henry Ford",
  einstein: "Albert Einstein",
  aristotle: "Aristotle",
};

var images = {
  [people.disney]:
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
  [people.churchill]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/640px-Sir_Winston_Churchill_-_19086236948.jpg",
  [people.franklin]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/640px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
  [people.lincoln]:
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg",
  [people.jobs]:
    "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
  [people.ford]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_ford_1919.jpg/1200px-Henry_ford_1919.jpg",
  [people.einstein]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/170px-Albert_Einstein_%28Nobel%29.png",
  [people.aristotle]:
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
};

var quotes = [
  new Quote(
    people.disney,
    "The way to get started is to quit talking and begin doing."
  ),
  new Quote(
    people.churchill,
    "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty."
  ),
  new Quote(
    people.franklin,
    "Tell me and I forget. Teach me and I remember. Involve me and I learn."
  ),
  new Quote(
    people.lincoln,
    "In the end, it's not the years in your life that count. It's the life in your years"
  ),
  new Quote(people.jobs, "Stay hungry. Stay foolish."),
  new Quote(
    people.jobs,
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking"
  ),
  new Quote(
    people.ford,
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it"
  ),
  new Quote(
    people.einstein,
    "Life is like riding a bicycle. To keep your balance, you must keep moving."
  ),
  new Quote(people.einstein, "The only source of knowledge is experience."),
  new Quote(
    people.aristotle,
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
  ),
];

function Quote(person, quote) {
  this.quote = quote;
  this.person = person;

  this.getProfileImage = getImage = () => {
    console.log(this.person, images, images[this.person]);
    return images[this.person];
  };
}

// Get a random quote from the quotes array
function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return {
    quote: quotes[randomIndex].quote,
    person: quotes[randomIndex].person,
    image: quotes[randomIndex].getProfileImage(),
  };
}

// Display the quote on the page
function renderQuote() {
  var randomQuote = generateRandomQuote();
  var quote = document.querySelector(".quote");
  var person = document.querySelector(".source");
  var img = document.querySelector(".img");

  quote.textContent = randomQuote.quote;
  person.textContent = randomQuote.person;
  console.log(randomQuote.image);
  img.src = randomQuote.image;
  //   img.setAttribute("src", randomQuote.image);
}

(function btnEventListener() {
  var button = document.querySelector("#load-quote");
  button.addEventListener("click", renderQuote);
})();

renderQuote();
