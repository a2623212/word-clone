import React from "react";
import EndGuess from "../EndGuess";

function GuessInput({ handleAfterSubmit, status, guesses, answer }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // recheck the validation
    if (tentativeGuess.length !== 5) {
      window.alert("please input the 5-letter word 😄");
      return;
    }
    handleAfterSubmit(tentativeGuess);
    setTentativeGuess("");
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          minLength="5"
          maxLength="5"
          value={tentativeGuess}
          disabled={status !== "running"}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
      <EndGuess status={status} guesses={guesses} answer={answer} />
    </>
  );
}

export default GuessInput;
