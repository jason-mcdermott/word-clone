import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({guesses, setGuesses}) {
  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess} 
        onChange={event => setGuess(event.target.value.toUpperCase())}
        disabled={guesses.length === NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  )
}

export default GuessInput;
