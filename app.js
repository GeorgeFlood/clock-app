const background = document.querySelector(`.background-container--${"day"}`);
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const quoteRefresh = document.querySelector("#quote-refresh");

console.log(background);

// random quote generator
const generateQuote = function (data) {
  const randomQuote = data[Math.floor(Math.random() * data.length)];
  const { text, author } = randomQuote;
  quote.textContent = `"${text}"`;
  quoteAuthor.textContent = author;
};

const api = function () {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      generateQuote(data);
    });
};

api();

quoteRefresh.addEventListener("click", api);
//navigation location

// create new Intl time format.

// create the clock

// if it's > 18:00pm change class to night background && change message to good evening.

// if it's > 12:00pm change message to good morning

// a show more/less button than will add or remove a class showing extra information.
