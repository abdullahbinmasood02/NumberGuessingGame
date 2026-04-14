'use strict';

let number = (Math.trunc(Math.random() * 20) + 1);


const restartGame = () => {

    const messageEl = document.querySelector("#message");
    const scoreEl = document.querySelector("#score");

    messageEl.textContent = "Start Guessing";
    scoreEl.textContent = "20";
    document.querySelector("#check").disabled = false;
    document.querySelector("#container").style.backgroundColor = "black";
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("#guess").textContent = "0";

}

const wrongGuess = (hint) => {

    const messageEl = document.querySelector("#message");
    const guessedEl = document.querySelector("#guess");

    messageEl.textContent = hint;
    guessedEl.value = "";
}

const handleClick = () => {

    const messageEl = document.querySelector("#message");
    const guessedEl = document.querySelector("#guess");
    const scoreEl = document.querySelector("#score");
    const highScoreEl = document.querySelector("#highScore");
    const guessedNumber = Number(guessedEl.value);
    const numberContainer = document.querySelector("#number");

    if (guessedNumber === number) {

        messageEl.textContent = "🎉 Correct Number, Restarting in 3 seconds";
        document.querySelector("#container").style.backgroundColor = "var(--color-green-400)"
        highScoreEl.textContent = scoreEl.textContent;
        scoreEl.textContent = String(20);
        numberContainer.style.transform = "scale(1.25)";
        setTimeout(restartGame, 3000);
    }
    else if (guessedNumber !== number) {

        if (guessedNumber > number) {

            wrongGuess("Too High!");
        }

        else if (guessedNumber < number) {

            wrongGuess("Too Low!");
        }

        scoreEl.textContent = String(Number(scoreEl.textContent) - 1);

        if (Number(scoreEl.textContent) === 0) {

            messageEl.textContent = "Game Lost. Your Score has gone 0 ! Restarting in 3 seconds";
            document.querySelector("#container").style.backgroundColor = "var(--color-red-800)"
            document.querySelector("#check").disabled = true;
            setTimeout(restartGame, 3000);
        }


    }





}




document.querySelector("#check").addEventListener("click", handleClick);
