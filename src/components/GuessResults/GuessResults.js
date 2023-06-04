import React from "react";

function GuessResults() {
  return (
    <div className="guess-results">
      <p className="guess">GUESS</p>
      <p className="guess">GUESS</p>
      {/* {guessResults.map((result) => (
        <p className="guess" key={Math.random()}>
          {result}
        </p>
      ))} */}
    </div>
  );
}

export default GuessResults;
