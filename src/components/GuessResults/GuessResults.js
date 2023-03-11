import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";

function GuessResults({guesses, answer}) {
  const correctAnswerIndex = guesses?.indexOf(answer);
 
  return (
   <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <>
            <Guess 
              key={index} 
              word={guesses[index]}
              answer={answer}
            />
            { correctAnswerIndex === index ? (
              <div class="happy banner">
                <p>
                  <strong>Congratulations!</strong> Got it in <strong>{ index > 0 ? `${index + 1} guesses` : `${index + 1} guess`}</strong>.
                </p>
              </div>) : null }
          </>

        )}
      )}
      { guesses.length === NUM_OF_GUESSES_ALLOWED && correctAnswerIndex < 0 && (
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default GuessResults;
