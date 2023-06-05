import React from "react";

function EndGuess({ status, guesses, answer }) {
  return (
    <>
      {status === "running" && undefined}
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {status === "lost" && (
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
