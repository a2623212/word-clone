import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleAfterSubmit(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setStatus("won");
    }
    if (
      tentativeGuess !== answer &&
      nextGuesses.length === NUM_OF_GUESSES_ALLOWED
    ) {
      setStatus("lost");
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleAfterSubmit={handleAfterSubmit}
        status={status}
        answer={answer}
        guesses={guesses}
      />
    </>
  );
}

export default Game;
