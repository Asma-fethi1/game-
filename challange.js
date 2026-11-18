
// Array containing game choices
const choices = ["Rock", "Paper", "Scissors"];

// Object to track scores
let score = {
    player: 0,
    computer: 0
};

// Play the game
function playGame(playerChoice) {

    // Computer randomly selects a choice
    const computerChoice = choices[
        Math.floor(Math.random() * choices.length)
    ];

    // Display choices
    document.getElementById("player-choice").textContent =
        "You chose: " + playerChoice;

    document.getElementById("computer-choice").textContent =
        "Computer chose: " + computerChoice;

    // Decide the winner using if/else
    let result = "";

    if (playerChoice === computerChoice) {

        result = "🤝 It's a Draw!";

    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "🎉 You Win!";
        score.player++;

    } else {

        result = "💻 Computer Wins!";
        score.computer++;

    }

    // Update result
    document.getElementById("result").textContent = result;

    // Update scores
    document.getElementById("player-score").textContent =
        score.player;

    document.getElementById("computer-score").textContent =
        score.computer;

    // Show whose turn it is
    document.getElementById("turn").textContent =
        "Round finished! Play again.";
}

// Reset game
function resetGame() {

    score.player = 0;
    score.computer = 0;

    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;

    document.getElementById("player-choice").textContent =
        "You chose: -";

    document.getElementById("computer-choice").textContent =
        "Computer chose: -";

    document.getElementById("result").textContent =
        "Let's Play!";

    document.getElementById("turn").textContent =
        "Your turn!";
}
