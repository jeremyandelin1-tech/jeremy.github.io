js/script.js


// Ask for user's name
let alert name = prompt("May I get Your Name?:");

// Ask for user's age
let age = prompt("May I Get Your Age?:");

// Ask for birth month (number 1–12)
let month = parseInt(prompt("Enter a birth month (1-12):"));

let monthName, birthstone, season;

switch (month) {
  case 1: monthName = "January"; birthstone = "Garnet"; season = "Winter"; break;
  case 2: monthName = "February"; birthstone = "Amethyst"; season = "Winter"; break;
  case 3: monthName = "March"; birthstone = "Aquamarine"; season = "Spring"; break;
  case 4: monthName = "April"; birthstone = "Diamond"; season = "Spring"; break;
  case 5: monthName = "May"; birthstone = "Emerald"; season = "Spring"; break;
  case 6: monthName = "June"; birthstone = "Pearl"; season = "Summer"; break;
  case 7: monthName = "July"; birthstone = "Ruby"; season = "Summer"; break;
  case 8: monthName = "August"; birthstone = "Peridot"; season = "Summer"; break;
  case 9: monthName = "September"; birthstone = "Sapphire"; season = "Fall"; break;
  case 10: monthName = "October"; birthstone = "Opal"; season = "Fall"; break;
  case 11: monthName = "November"; birthstone = "Topaz"; season = "Fall"; break;
  case 12: monthName = "December"; birthstone = "Turquoise"; season = "Winter"; break;
  default: monthName = birthstone = season = "Unknown";
}

// Show alert popup
alert(`Howdy ${name}. You are ${age} years old, born in ${monthName} (${season}), and your birthstone is ${birthstone}.`);

// Update page content after alert
document.getElementById("message").textContent =
  `Howdy ${name}! You are ${age} years old, born in ${monthName} (${season}), and your birthstone is ${birthstone}.`;

