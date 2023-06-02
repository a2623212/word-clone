import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // recheck the validation
    if (guess.length !== 5) {
      window.alert("please input the 5-letter word 😄");
      return;
    }

    console.log(
      "🚀 ~ file: GuessInput.js:5 ~ GuessInput ~ uess:",
      guess
    );
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
