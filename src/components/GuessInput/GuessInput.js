import React from "react";

function GuessInput({ handleAfterSubmit, gameStatus }) {
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
          disabled={gameStatus !== "running"}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
