computerPlay = () => {
    let randomNumber = Math.random();

    if(randomNumber <= (1 / 3)) {
        return "rock"; //rock
    }
    else if(randomNumber > 1/3 && randomNumber < 2/3) {
        return "scissors"; //scissors
    } else {
        return "paper"; //paper
    }
}

playRound = (playerSelection, computerSelection) => {
    let result;
    switch(playerSelection) {
        case "rock": //rock
            switch(computerSelection) {
                case "rock": //rock
                    result = "Draw";
                    break;
                case "scissors": //scissors
                    result = "Player won";
                    break;
                case "paper": //paper
                    result = "Player lost";
                    break;
            }
            break;
        case "scissors": //scissors
            switch(computerSelection) {
                case "rock": //rock
                    result = "Player lost";
                    break;
                case "scissors": //scissors
                    result = "Draw";
                    break;
                case "paper": //paper
                    result = "Player won";
                    break;
            }
            break;
        case "paper": //paper
            switch(computerSelection) {
                case "rock": //rock
                    result = "Player won";
                    break;
                case "scissors": //scissors
                    result = "Player lost";
                    break;
                case "paper": //paper
                    result = "Draw";
                    break;
            }
            break;
    }
    return result;
}

let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        document.querySelectorAll(".text").forEach((a) => {
            a.remove();
        })
        
        const container = document.querySelector("#wrapper");
        let playerSelection = button.id;

        const playerText = document.createElement('div');
        playerText.className = "text";
        playerText.textContent = "Player picked " + playerSelection;
        container.appendChild(playerText);

        let computerSelection = computerPlay();
        const compText = document.createElement('div');
        compText.className = "text";
        compText.textContent = "Computer picked " + computerSelection;
        container.appendChild(compText);

        let result = playRound(playerSelection, computerSelection);

        const resultText = document.createElement('div');
        resultText.className = "text";
        resultText.textContent = result;
        container.appendChild(resultText);

        switch(result) {
            case "Player won":
                playerScore++;
                resultText.style.color = "rgb(102, 157, 179)";
                break;
            case "Player lost":
                compScore++;
                resultText.style.color = "rgb(217, 81, 78)";
                break;
        }

        document.querySelectorAll(".text").forEach((a) => {
            a.style.position = "relative";
            a.style.top = "-200px";
        })

        document.getElementById("comp-score").style.top = "-50px";
        document.getElementById("comp-score").innerHTML = compScore;
        document.getElementById("player-score").innerHTML = playerScore;

        if(playerScore == 5) {
            document.querySelectorAll(".text").forEach((a) => {
                a.remove();
            })

            const winText = document.createElement('div');
            winText.className = "text";
            winText.textContent = "You Won!";
            container.appendChild(winText);
            winText.style.position = "relative";
            winText.style.bottom = "175px";
            winText.style.fontSize = "2rem";
            winText.style.color = "rgb(102, 157, 179)";

            const replayText = document.createElement('div');
            replayText.className = "text";
            replayText.textContent = "Choose a weapon to play again";
            container.appendChild(replayText);
            replayText.style.position = "relative";
            replayText.style.bottom = "125px";

            playerScore = 0;
            compScore = 0;
        }

        if(compScore == 5) {
            document.querySelectorAll(".text").forEach((a) => {
                a.remove();
            })

            const loseText = document.createElement('div');
            loseText.className = "text";
            loseText.textContent = "You Lost!";
            container.appendChild(loseText);
            loseText.style.position = "relative";
            loseText.style.bottom = "175px";
            loseText.style.fontSize = "2rem";
            loseText.style.color = "rgb(217, 81, 78)";

            const replayText = document.createElement('div');
            replayText.className = "text";
            replayText.textContent = "Choose a weapon to play again";
            container.appendChild(replayText);
            replayText.style.position = "relative";
            replayText.style.bottom = "125px";

            playerScore = 0;
            compScore = 0;
        }
    })
}) 