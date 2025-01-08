const quotes = [
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela", year: 1994,
    citation: "Inaugural speech"},
  {quote:"The way to get started is to quit talking and begin doing", source: "Walt Disney", year: 1940, citation: "Disneyland Opening"},
  {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking", 
          source: "Steve Jobs", year: 2005, citation: "Stanford Commencement"},
  {quote:"The future belongs to those who believe in the beauty of their dreams", source: "Eleanor Roosevelt", year: 1945, citation: "UN Speech"},
  {quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", source: "James Cameron", year: 2009, citation: "Avatar Premiere"},
];

const quote = document.querySelector('.quote');
const source = document.querySelector('.source').innerHTML;
const year = document.querySelector('.source .year');
const citation = document.querySelector('.source .citation');
const body = document.querySelector('body');


const getRGB = () => Math.floor(Math.random() * 256)

const printQuote = () => {
  let index = Math.floor(Math.random() * quotes.length);
  citation.textContent = quotes[index].citation;
    year.textContent = quotes[index].year;
  quote.textContent = quotes[index].quote;
  source.textContent = quotes[index].source;
  body.style.backgroundColor = `rgb(${getRGB()}, ${getRGB()}, ${getRGB()}`;
}


setInterval(printQuote, 5500);

document.getElementById('load-quote').addEventListener("click", printQuote, false);