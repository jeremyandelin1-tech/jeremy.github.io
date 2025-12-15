// js/script.js

// Array of quotes with audio file references (all objects valid JSON-like)
const QUOTES = [
  { text: "Why use many word when few word do trick", author: "Kevin", sound: "audio/chime.mp3" },
  { text: "USA", author: "Mf", sound: "audio/whoosh.mp3" },
  { text: "When in doubt add more sauerkraut", author: "Unknown", sound: "audio/ding.mp3" },
  { text: "You should always look at stuff because you might see something", author: "Leelee", sound: "audio/rash.mp3" },

  { text: "Kneecaps are just like knees bruh", author: "Brent Hull", sound: "audio/rash.mp3" },
  { text: "Move lilly", author: "The Greasy Grimbler", sound: "audio/ding.mp3" },
  { text: "Does this taste like cheese", author: "The Grimbler", sound: "audio/ding.mp3" },
  { text: "Not all who wonder are bread", author: "Lee Lee The Russian", sound: "audio/rash.mp3" },
  { text: "My homeboy will get you paid, on the 33rd.", author: "Waka Flocka", sound: "audio/ding.mp3" },
  { text: "Go to bed", author: "Your Mom", sound: "audio/rash.mp3" }
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const quoteSound = document.getElementById("quoteSound");

  quoteBtn.addEventListener("click", () => {
    // Pick a random quote
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

    // Update text
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author ? `— ${randomQuote.author}` : "";

    // Switch audio file
    if (quoteSound && randomQuote.sound) {
      quoteSound.pause();
      quoteSound.src = randomQuote.sound;
      quoteSound.load();
      quoteSound
        .play()
        .catch(() => {
          // If play fails (autoplay policy), it will play on the user click anyway
        });
    }
  });
});
