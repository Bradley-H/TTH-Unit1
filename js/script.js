const quotes = [
  {source: "Nelson Mandela", year: 1994, tag: "political",
    citation: "Inaugural speech"},
  {quote:"The way to get started is to quit talking and begin doing", source: "Walt Disney", year: 1940, citation: "Disneyland Opening"},
  {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking", 
          source: "Steve Jobs", year: 2005},
  {quote:"The future belongs to those who believe in the beauty of their dreams", source: "Eleanor Roosevelt", citation: "UN Speech"},
  {quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", year: 2009, citation: "Avatar Premiere"},
];

const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const year = document.querySelector('.source .year');
const citation = document.querySelector('.source .citation');

const body = document.querySelector('body');

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];


const getRGB = () => Math.floor(Math.random() * 256)

const printQuote = () => {
  const randomQuote = getRandomQuote();

  const quoteText = !randomQuote.quote ? "" : randomQuote.quote;
  quote.innerHTML = quoteText;

  const sourceText = !randomQuote.source ? "" : randomQuote.source;
  const yearText = !randomQuote.year ? "" : randomQuote.year;
  const citationText = !randomQuote.citation ? "" : randomQuote.citation;
  const tagText = !randomQuote.tag ? "" : randomQuote.tag;

  source.innerHTML = `${sourceText} <span class="citation">${citationText}</span> <span class="year">${yearText}</span> <span>${tagText}</span>`;
  body.style.backgroundColor = `rgb(${getRGB()}, ${getRGB()}, ${getRGB()}`;
}


setInterval(printQuote, 5500);

document.getElementById('load-quote').addEventListener("click", printQuote, false);