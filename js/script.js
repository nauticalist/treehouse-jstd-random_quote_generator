/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    source: "Carl Sagan",
    citation: "The Demon-Haunted World: Science as a Candle in the Dark",
    year: 1997,
    tags: "science"
  },
  {
    quote: "The true miracle is that abstract considerations of logic lead to a unique theory that predicts and describes a vast universe full of the amazing variety that we see.",
    source: "Stephen Hawking,Leonard Mlodinow",
    citation: "The Grand Design",
    year: 2010,
    tags: "science"
  },
  {
    quote: "Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before.",
    source: "Kurt Vonnegut Jr.",
    citation: "Cat's Cradle ",
    year: 1999,
    tags: "knowledge"
  },
  {
    quote: "Instead of worrying about what you cannot control, shift your energy to what you can create.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart ",
    year: 2016,
    tags: "philosophy"
  },
  {
    quote: "Trying to understand is like straining through muddy water. Have the patience to wait! Be still and allow the mud to settle.",
    source: "Lao Tzu",
    citation: "Tao Te Ching",
    year: 1989,
    tags: "taoism"
  },
  {
    quote: "The role of a creative leader is not to have all the ideas; it’s to create a culture where everyone can have ideas and feel that they’re valued.",
    source: "Out of Minds",
    citation: "Sir Ken Robinson",
    year: 2001,
    tags: "leadership"
  },
  {
    quote: "Genius is one percent inspiration, ninety-nine percent perspiration",
    source: "Thomas A. Edison ",
    citation: "Harper's Monthly Magazine.",
    year: 1982,
    tags: "inspiration"
  }
];

//console.log(quotes.length);

/***
 * `getRandomQuote` function
***/
// get a randomNumber between 0 and given upper value for array indexes
function getRandomIndex(upper) {
  return Math.floor( Math.random() * upper );
}

// get the array item using the random index position
function getRandomQuote(quotesArr) {
  const randomIndex = getRandomIndex(quotesArr.length);

  return quotesArr[randomIndex];
}

// console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);