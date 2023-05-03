let target 
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const roundNumberDisplay = document.getElementById('round-number')
const targetNumberDisplay = document.getElementById('target-number')

//Computer part
const computerGuessDisplay = document.getElementById('computer-guess')
const computerScoreDisplay = document.getElementById('computer-score')
const computerWinDisplay = document.getElementById('computer-wins')

//My part
const humanGuessInput = document.getElementById('human-guess')
const humanScoreDisplay = document.getElementById('human-score')

const guessButton = document.getElementById('guess')  //click on HUMAN GUESS

//CLICK ON next round
const nextRoundButton = document.getElementById('next-round')



//1. FUNCTION 
const generateTarget =() =>{
  return Math.floor(Math.random() *10);
}
console.log(generateTarget())

const compare3Guesses = (humanGuess, computerGuess, targetGuess)=>{
    //I add Math.abs because it can become negative
  const humanDiff = Math.abs (targetGuess-humanGuess)
  console.log(`${targetGuess} + ${humanGuess} + ${humanDiff}`)
  const computerDiff = Math.abs(targetGuess-computerGuess)

  if(humanDiff <= computerDiff){
    return true;
  }
  else{
    return false;
  }
}

//2. FUNCTION 
const updateScore = (winner) =>{
  if(winner === 'human'){
    humanScore ++
  } else if (winner === 'computer'){
    computerScore ++
  }
}


// 3 function this is just a simple round number count
const advanceRound = ()=>{
  currentRoundNumber++
}


//4. FUNCTION 
guessButton.addEventListener('click', () =>{

    target = generateTarget();
    //Retrieve my input
    const currentHumanGuess = humanGuessInput.value
    //create random computer guess 
    const computerGuess = Math.floor(Math.random() * 10)
    //Display the computer guess
    computerGuessDisplay.innerText = computerGuess;
    targetNumberDisplay.innerText =target

   
    //created a function that determine who is the winner and then update the score from function 2

    const humanIsWinner = compare3Guesses(currentHumanGuess, computerGuess, target)
    
     const winner = humanIsWinner ? 'human' : 'computer'

    // Update the correct score:
    updateScore(winner);

   

    //Display the Winner
    if(humanIsWinner){
        guessButton.innerText = 'You win Yeah!!!!'
        guessButton.style.backgroundColor = 'white';
        guessButton.style.fontWeight = "bold"
        guessButton.style.color = "black"
        guessButton.classList.toggle('winning-text')
    }else{
        computerWinDisplay.innerText = 'Computer Wins try AGAIN !!!!'
    }

    //DISPLAY THE CURRENT SCORE ON BOTH 
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
    
    
    guessButton.setAttribute('disabled', true)
    nextRoundButton.removeAttribute('disabled');

})

//5. FUNCTION 
nextRoundButton.addEventListener('click', () => {

    advanceRound();
    //did not take 56
    roundNumberDisplay.innerText = currentRoundNumber

    nextRoundButton.setAttribute('disabled', true)
    guessButton.removeAttribute('disabled')

//reset everything take it from the top from 18

    targetNumberDisplay.innerText = '?'
    computerGuessDisplay.innerText = '?'
    computerWinDisplay.innerText = ''
    humanGuessInput.value = '';
    guessButton.innerText = 'Make A Guess'
    guessButton.classList.remove('winning')

});

const addB = document.getElementById('add');
const subtractB = document.getElementById('subtract');

addB.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractB.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});


//6. Function fuck sake
const handleValueChange = value => {
  if (value > 0 && value <= 9) {
    subtractB.removeAttribute('disabled');
    addB.removeAttribute('disabled');
  } else if (value > 9) {
    addB.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractB.setAttribute('disabled', true);
  }
}

humanGuessInput.addEventListener('input', function(event) {
  handleValueChange(event.target.value);
});


