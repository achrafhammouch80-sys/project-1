// Cookie melding
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookiesBtn = document.getElementById("accept-cookies");

acceptCookiesBtn.addEventListener("click", () => {
  cookieBanner.style.display = "none";
  console.log("Cookie-melding geaccepteerd en verborgen.");
});

// Dark/Light mode knoppen
const lightBtn = document.getElementById("light-mode-btn");
const darkBtn = document.getElementById("dark-mode-btn");

// Functie om mode te zetten
function setMode(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    console.log("Dark mode ingeschakeld.");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    console.log("Light mode ingeschakeld.");
  }
  localStorage.setItem("theme", mode); // voorkeur opslaan
}

// Event listeners
lightBtn.addEventListener("click", () => setMode("light"));
darkBtn.addEventListener("click", () => setMode("dark"));

// Bij laden voorkeur ophalen
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setMode(savedTheme);
} else {
  setMode("light"); // standaard light mode
}
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});
// Een array met getallen
let scores = [10, 20, 30, 40];

// Toegang tot elementen (index begint bij 0)
console.log(scores[0]); // 10
console.log(scores[2]); // 30

// Waarde aanpassen
scores[1] = 25; 
console.log(scores); // [10, 25, 30, 40]

// Nieuwe waarde toevoegen
scores.push(50);
console.log(scores); // [10, 25, 30, 40, 50]

// Door alle waarden lopen
for (let i = 0; i < scores.length; i++) {
  console.log("Score:", scores[i]);
}
