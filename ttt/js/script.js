// Ticked Taxed Toes Game

// Game state
var markers = ["X", "O"];
var players = [];
var totals = [];
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var gameOver = false;
var wins = [0, 0];
var ties = 0;
var whoseTurn = 0;
    players[0] = prompt("Player 1 name:") || "Player 1";
    players[1] = prompt("Player 2 name:") || "Player 2";
// Sounds
var happySound = new Audio("sounds/happy.mp3");
var sadSound = new Audio("sounds/sad.mp3");

// Start a new game
function startGame() {
    // Prompt player names once per game start

    // Build board
    var counter = 1;
    var innerDivs = "";
    for (var i = 1; i <= 3; i++) {
        innerDivs += '<div id="row-' + i + '">';
        for (var j = 1; j <= 3; j++) {
            innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
            counter *= 2;
        }
        innerDivs += '</div>';
    }
    document.getElementById("game-board").innerHTML = innerDivs;

    // Reset state
    totals = [0, 0];
    gameOver = false;
    whoseTurn = 0;

    // Update scoreboard
    document.getElementById("player1-name").innerText = players[0];
    document.getElementById("player2-name").innerText = players[1];
    document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";
}

// Handle a move
function playGame(clickedDiv, divValue) {
    if (gameOver) return;

    // Place marker
    clickedDiv.innerText = markers[whoseTurn];
    clickedDiv.setAttribute("onclick", ""); // prevent re-click
    totals[whoseTurn] += divValue;

    // Check win
    if (isWin()) {
        document.getElementById("game-message").innerText = players[whoseTurn] + " wins!";
        wins[whoseTurn]++;
        document.getElementById("player1-wins").innerText = wins[0];
        document.getElementById("player2-wins").innerText = wins[1];
        happySound.play();
        return;
    }

    // Check tie
    if (gameOver) {
        document.getElementById("game-message").innerText = "It's a tie!";
        ties++;
        document.getElementById("ties").innerText = ties;
        sadSound.play();
        return;
    }

    // Switch turn
    whoseTurn = (whoseTurn === 0 ? 1 : 0);
    document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";
}

// Win/tie logic
function isWin() {
    for (var i = 0; i < winCodes.length; i++) {
        if ((totals[whoseTurn] & winCodes[i]) === winCodes[i]) {
            gameOver = true;
            return true;
        }
    }

    // Tie if all squares filled
    if (totals[0] + totals[1] === 511) {
        gameOver = true;
    }

    return false;
}
