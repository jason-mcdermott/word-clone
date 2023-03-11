import React from "react";
import {range} from "../../utils";
import {checkGuess} from '../../game-helpers';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

function Guess({word, answer}) {
  const guessResults = checkGuess(word, answer);
  return (
    <p className="guess">
      { guessResults ? (
          guessResults?.map((result, index) => 
            <span key={index} className={`cell ${result.status}`}>{result.letter}</span>
        )) : (
          range(0, NUM_OF_LETTERS_ALLOWED).map((index) => 
          <span key={index} className='cell'></span>
        ))}
    </p>
  );
}

export default Guess;
