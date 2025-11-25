// Ask the user how many numbers they want
let count = prompt("How many numbers would you like to pick?");
count = parseInt(count);

if (!isNaN(count) && count > 0) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * 99) + 1; // 1–99
    numbers.push(randomNum);
  }
  // Format output as xx-xx-xx
  document.getElementById("output").textContent = numbers.join("-");
} else {
  document.getElementById("output").textContent = "Invalid input. Please refresh and try again.";
}