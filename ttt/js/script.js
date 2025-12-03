//Ticked Taxed Toes Games
var markers = ["X", "O"];
var players = [];
players[0] = prompt("Player 1");
players[1] = prompt("Player 2");
var totals = [];
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var gameOver;
// player1 wins, player2 wins
var wins = [0, 0]; 
var whoseTurn = 0;


function startGame() 
{
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i<=3; i++)
	{
	innerDivs += '<div id="row-' + i + '">';
	for (j = 1; j <=3; j++)
	{
	innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
	counter *=2;
	}
	innerDivs += '</div>';
}
	document.getElementById("game-board").innerHTML = innerDivs;
	totals = [0, 0];
	gameOver = false;
	document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";


{
    var counter = 1;
    var innerDivs = "";
    for (i = 1; i <= 3; i++) {
        innerDivs += '<div id="row-' + i + '">';
        for (j = 1; j <= 3; j++) {
            innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
            counter *= 2;
        }
        innerDivs += '</div>';
    }
    document.getElementById("game-board").innerHTML = innerDivs;
    totals = [0, 0];
    gameOver = false;
    document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";

    // show player names on scoreboard
    document.getElementById("player1-name").innerText = players[0];
    document.getElementById("player2-name").innerText = players[1];
}


}

function playGame(clickedDiv, divValue) 
{
	if (!gameOver)
	{
  //add x or o to playing field
  clickedDiv.innerText = markers[whoseTurn];

  //keep track of the players' totals for win combo
  totals[whoseTurn] += divValue;

  //call isWin() function
  if (isWin())
  {
    document.getElementById("game-message").innerText = players[whoseTurn] + " wins!";
	}
	else if(gameOver)
	{
	document.getElementById("game-message").innerText = "House Wins Again Chump!";
  } 
  else 
  {
    //toggle player turn
    if (whoseTurn == 1) { whoseTurn = 0; } else { whoseTurn = 1; }

    //prevent clicking on same div again
    clickedDiv.setAttribute("onclick", "");
	

    //update message to display next player
    document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";
	}
	if (isWin()) {
    document.getElementById("game-message").innerText = players[whoseTurn] + " wins!";
    wins[whoseTurn]++; // add a win
    document.getElementById("player1-wins").innerText = wins[0];
    document.getElementById("player2-wins").innerText = wins[1];
}


  }
}

//win code logic
function isWin()
 {
  for (i = 0; i < winCodes.length; i++) 
  {
    if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) {gameOver = true; return true;}
  }
  
  if (totals[0] + totals[1] == 511) {gameOver = true;}

  return false;
}

