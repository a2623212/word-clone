import React from "react";

function EndGuess({ gameStatus, numOfGuesses, answer }) {
  return (
    <>
      {gameStatus === "running" && undefined}
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numOfGuesses === 1
                ? "1 guess"
                : `${numOfGuesses} guesses`}
            </strong>
            .
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default EndGuess;
