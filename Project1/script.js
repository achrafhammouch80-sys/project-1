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
