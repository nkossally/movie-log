import { useState } from "react";
import { Spoiler } from "./Spoiler";

export const Text = ({ text }) => {
  const wordsArr = text.split(" ");
  const wordArraryBlocks = [];

  let curr = [[], "NOT-SPOILER"];
  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    if (word === "[SPOILER-START]") {
      if (curr[0].length > 0) {
        wordArraryBlocks.push(curr);
      }
      curr = [[], "SPOILER"];
    } else if (word === "[SPOILER-END]") {
      wordArraryBlocks.push(curr);
      curr = [[], "NOT-SPOILER"];
    } else if (i === 0) {
      curr = [[], "NOT-SPOILER"];
      curr[0].push(word);
    } else {
      curr[0].push(word);
    }
  }
  if (curr[0].length > 0) {
    wordArraryBlocks.push(curr);
  }

  return (
    <div className="text-container">
      {wordArraryBlocks.map((block, idx) => {
        const words = block[0];
        if (block[1] === "SPOILER") {
          return <Spoiler words={words}></Spoiler>;
        } else {
          return (
            <>
              {words.map((word) => {
                return (
                  <div key={word + idx} className="moving-text">
                    {word}&nbsp;
                  </div>
                );
              })}
            </>
          );
        }
      })}
    </div>
  );
};
