let numberCount; // for to save inputs and whatnots

//ask your dude how many numbers were "not" gambling with
function askNumberCount() {
  while (true) {
    let input = prompt("How many numbers do you want to pick? (max 8)");
    if (input === null) return;
	// cancel play I guess
    numberCount = parseInt(input);

    if (!isNaN(numberCount) && numberCount > 0 && numberCount <= 8) {
      break; // a number that'll work for once
    } else {
      alert("Invalid input! Please enter a number between 1 and 8, and just be better overall.");
    }
  }
}

// generator gienies basic laws of randomization
function generateNumbers() {
  let numbers = [];
  for (let i = 0; i < numberCount; i++) {
    let rand = Math.floor(Math.random() * 99) + 1; // 1–99
    numbers.push(rand);
  }
  document.getElementById("output").textContent = numbers.join("-");
}

//first rolll
askNumberCount();
if (numberCount) {
  generateNumbers();
}

// for maximum replay "non-addictive I promise"
document.getElementById("generatorgenie").addEventListener("click", generateNumbers);