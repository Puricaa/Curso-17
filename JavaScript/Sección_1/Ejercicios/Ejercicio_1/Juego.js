const playerScore =
document.getElementById('playerScore');
const computerScore = 
document.getElementById('computerScore');
const resultText =
document.getElementById('resultText');
const buttons =
document.querySelectorAll('.choices button');

let pScore = 0;
let cScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        resultText.textContent = result;
        playerScore.textContent = pScore,
        computerScore.textContent = cScore;
    });
});

function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate!";
    } else if (
        (playerSelection === 'piedra' && computerSelection === 'tijera') || (playerSelection === 'papel' && computerSelection === 'piedra') || (playerSelection === 'tijera' && computerSelection === 'papel')
    ) {
        pScore++;
        return "¡Ganaste!";
    } else {
        cScore++;
        return "¡Perdiste!";
    }
}
