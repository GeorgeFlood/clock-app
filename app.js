const background = document.querySelector(`.background-container--day`);
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const quoteRefresh = document.querySelector("#quote-refresh");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const timeOfDaySpan = document.querySelector(".clock--intro--timeofday");
const sun = document.querySelector(".clock-intro--sun");
const moon = document.querySelector(".clock-intro--moon");

const timeZone = document.querySelector("#timeZone");
const dayOfYear = document.querySelector("#dayOfYear");
const dayOfWeek = document.querySelector("#dayOfWeek");
const weekNum = document.querySelector("#weekNum");

const showMoreBtn = document.querySelector(".showMore");
const clockDiv = document.querySelector(".clock-container");
const quoteDiv = document.querySelector(".quote-container ");
const moreActive = document.querySelector(".more");

let now,
  minutes,
  hours,
  fullYear,
  getDay,
  diff,
  oneDay,
  day,
  newWeek,
  weeks,
  weekNumber;

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

setInterval(function () {
  now = new Date();
  minutes = `${now.getMinutes()}`.padStart(2, 0);
  hours = `${now.getHours()}`.padStart(2, 0);
  fullYear = new Date(now.getFullYear(), 0, 0);
  getday = now.getDay();

  diff = now - fullYear;
  oneDay = 1000 * 60 * 60 * 24;
  day = Math.floor(diff / oneDay);

  newWeek = new Date(now.getFullYear(), 0, 1);
  weeks = Math.floor((now - newWeek) / (24 * 60 * 60 * 1000));
  weekNumber = Math.ceil(weeks / 7);
  //   const now = new Date();

  console.log(weekNumber);
  hour.textContent = hours;
  minute.textContent = minutes;
  dayOfYear.textContent = day;
  dayOfWeek.textContent = getday;
  weekNum.textContent = weekNumber;

  timeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dynamicTime = function (backgroundImg, message, moonImg, sunImg) {
    background.classList.add(`${backgroundImg}`);
    timeOfDaySpan.textContent = `${message}`;
    moon.style.display = `${moonImg}`;
    sun.style.display = `${sunImg}`;
  };

  if (+hours >= 18 && +hours <= 24) {
    dynamicTime("background-container--dark", "Good evening", "block", "none");
  }
  if (+hours > 1 && +hours <= 12) {
    dynamicTime("background-container--day", "Good morning", "none", "block");
  }
  if (+hours >= 12) {
    dynamicTime("background-container--day", "Good afternoon", "none", "block");
  }
}, 1000);

const toggleClass = (variable, className) =>
  variable.classList.toggle(`${className}`);

showMoreBtn.addEventListener("click", () => {
  toggleClass(moreActive, "more--active");
  toggleClass(clockDiv, "clock-container--active");
  toggleClass(quoteDiv, "quote-container--active");
});

// create new Intl time format.

// create the clock

// if it's > 18:00pm change class to night background && change message to good evening.

// if it's > 12:00pm change message to good morning

// a show more/less button than will add or remove a class showing extra information.
