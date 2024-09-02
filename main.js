let loveQuotes = [
  "You are beautiful. Take a look at the mirror to say some gratitude for the special person who brought you into this world. - Trillest",
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day. — Unknown",
  "You don’t love someone because they’re perfect. You love them in spite of the fact that they’re not. — Jodi Picoult",
  "In your smile, I see my favorite things. — Unknown",
  "I knew I loved you before I met you. — Savage Garden",
  "Love is the only force capable of transforming an enemy into a friend. — Martin Luther King Jr.",
  "You are my sun, my moon, and all my stars. — E.E. Cummings",
  "Whatever our souls are made of, his and mine are the same. — Emily Brontë",
  "To love and be loved is to feel the sun from both sides. — David Viscott",
  "I am yours, don't give myself back to me. — Rumi",
  "Every love story is beautiful, but ours is my favorite. — Unknown",
  "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love. — Gabriel Garcia Marquez",
  "You make my heart smile. — Unknown",
  "When I saw you I fell in love, and you smiled because you knew. — Arrigo Boito",
  "I would rather spend one lifetime with you than face all the ages of this world alone. — J.R.R. Tolkien",
  "You are the love of my life, and you are the reason I am alive. — Unknown",
  "I love you not only for what you are but for what I am when I am with you. — Roy Croft",
  "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind. — William Shakespeare",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. — Lao Tzu",
  "I love you more than there are stars in the sky and fish in the sea. — Unknown",
  "My heart is, and always will be, yours. — Jane Austen",
  "You are the light of my life and the reason for my smile.",
  "Every love story is beautiful, but ours is my favorite.",
  "Being in your arms feels like home.",
  "You’re my first thought in the morning and my last thought before I sleep.",
  "With you, every moment is a precious memory in the making.",
  "Your love is a melody that I want to play on repeat for the rest of my life.",
  "I found my forever when I found you.",
  "You are my heart’s greatest adventure.",
  "Every day with you is a new chapter in our fairy tale.",
  "Your laughter is my favorite sound and your smile is my favorite sight.",
  "I never knew what true love was until I met you.",
  "You are the sunshine that brightens my darkest days.",
  "You make my heart smile.",
  "Life with you feels like a dream I never want to wake up from.",
  "You are my love story, my destiny, and my everything.",
  "In your eyes, I see a future filled with endless possibilities.",
  "Every moment with you is a treasure I hold close to my heart.",
  "I’m grateful for every second I get to spend with you.",
  "You complete me in ways I never thought possible.",
  "Your love is the most beautiful gift I’ve ever received.",
  "You are the reason I believe in love and in miracles.",
  "With you by my side, I feel like I can conquer the world.",
  "You make me a better person just by being in my life.",
  "I love you more with each passing day.",
  "You are the answer to all my prayers.",
  "My heart is yours, now and forever.",
  "You are the dream I didn’t know I had, come true.",
  "You are my perfect match, my best friend, and my greatest love.",
  "Your love is the fire that keeps me warm in the coldest times.",
  "I would choose you over and over again, in every lifetime.",
];

const backgrounds = [
  // Static romantic images
  'url("https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Heart-shaped hands
  'url("https://images.unsplash.com/photo-1529519195486-16945f0fb37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Couple watching sunset
  'url("https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Couple holding hands
  'url("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Silhouette of couple
  'url("https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Heart-shaped bokeh
  'url("https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Couple in a field
  'url("https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Rose petals
  'url("https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Couple under northern lights
  'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Beautiful beach
  'url("https://images.unsplash.com/photo-1519680772-8b5c1b6b2b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")', // Starry night sky

  // Animated romantic GIFs
  'url("https://media.giphy.com/media/l4pTdcifPZLpDjL1e/giphy.gif")', // Animated heart
  'url("https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif")', // Floating hearts
  'url("https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif")', // Romantic couple silhouette
  'url("https://media.giphy.com/media/l0HlGfXU7ggwXkRxe/giphy.gif")', // Sunset beach waves
  'url("https://media.giphy.com/media/3o7aCRZYNerX4ovPwI/giphy.gif")', // Fireflies in a jar
  'url("https://media.giphy.com/media/l0HlGNcRTLAKhC8Yo/giphy.gif")', // Rose petals falling
  'url("https://media.giphy.com/media/3o7TKoHNJTWWLgljYQ/giphy.gif")', // Romantic candles
  'url("https://media.giphy.com/media/l0HlvFUHvDB9lkDA4/giphy.gif")', // Couple walking on beach
  'url("https://media.giphy.com/media/3o7TKoQ4jFs72DSyys/giphy.gif")', // Fireworks
  'url("https://media.giphy.com/media/l0HlUxUu3CqVAbees/giphy.gif")', // Cherry blossoms falling
];

let currentQuoteIndex = -1;
let currentBackgroundIndex = -1;

function getRandomIndex(currentIndex, arrayLength) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  } while (newIndex === currentIndex);
  return newIndex;
}

function changeQuoteAndBackground() {
  const quoteElement = document.getElementById("quote");
  const wrapperElement = document.querySelector(".wrapper");
  const containerElement = document.querySelector(".container");

  // Fade out
  containerElement.classList.remove("show");
  wrapperElement.style.opacity = 0;

  setTimeout(() => {
    // Change quote
    currentQuoteIndex = getRandomIndex(currentQuoteIndex, loveQuotes.length);
    quoteElement.textContent = loveQuotes[currentQuoteIndex];

    // Change background
    currentBackgroundIndex = getRandomIndex(
      currentBackgroundIndex,
      backgrounds.length
    );
    wrapperElement.style.backgroundImage = backgrounds[currentBackgroundIndex];

    // Fade in
    wrapperElement.style.opacity = 1;
    containerElement.classList.add("show");
  }, 500);
}

function initializeApp() {
  const containerElement = document.querySelector(".container");

  // Set initial quote and background
  changeQuoteAndBackground();

  // Add event listeners
  document.addEventListener("click", changeQuoteAndBackground);
  document.addEventListener("touchend", function (e) {
    if (e.changedTouches[0].target === e.target) {
      changeQuoteAndBackground();
    }
  });

  // Show initial content
  setTimeout(() => {
    containerElement.classList.add("show");
  }, 100);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);
