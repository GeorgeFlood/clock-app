const background = document.querySelector(`.background-container--day`);
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const quoteRefresh = document.querySelector("#quote-refresh");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const timeOfDaySpan = document.querySelector(".clock--intro--timeofday");

const timeZone = document.querySelector("#timeZone");

// random quote generator
const generateQuote = function (data) {
  const randomQuote = data[Math.floor(Math.random() * data.length)];
  const { text, author } = randomQuote;
  quote.textContent = `"${text}"`;
  author === null
    ? (quoteAuthor.textContent = `- Anonymous`)
    : (quoteAuthor.textContent = `- ${author}`);
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

const sun = document.querySelector(".clock-intro--sun");
const moon = document.querySelector(".clock-intro--moon");
setInterval(function () {
  const now = new Date();
  const minutes = `${now.getMinutes()}`.padStart(2, 0);
  const hours = `${now.getHours()}`.padStart(2, 0);
  const fullYear = now.getFullYear();

  hour.textContent = hours;
  minute.textContent = minutes;
  timeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (+hours >= 18 && hours <= 24) {
    background.classList.add("background-container--dark");
    timeOfDaySpan.textContent = "Good evening";
    moon.style.display = "block";
    sun.style.display = "none";
  }
  if (+hours > 1 && hours <= 12) {
    background.classList.add("background-container--day");
    timeOfDaySpan.textContent = "Good morning";
    moon.style.display = "none";
    sun.style.display = "block";
  }
  if (+hours >= 12) {
    background.classList.add("background-container--day");
    timeOfDaySpan.textContent = "Good afternoon";
  }
}, 1000);

// create new Intl time format.

// create the clock

// if it's > 18:00pm change class to night background && change message to good evening.

// if it's > 12:00pm change message to good morning

// a show more/less button than will add or remove a class showing extra information.
