import { useState } from "react";
import classNames from "classnames";

const SPOILER_START_FLAG = "[SPOILER-START]";
const SPOILER_END_FLAG = "[SPOILER-END]";

const TITLE_START_FLAG = "[TITLE-START]";
const TITLE_END_FLAG = "[TITLE-END]";

export const Text = ({ text }) => {
  const [showSpoiler, setShowSpoiler] = useState(false);

  const handleShowSpoiler = () => {
    setShowSpoiler(!showSpoiler);
  };

  const wordsArr = text.split(" ");
  const wordBlocks = [];

  let isSpoiler;
  let isTitle;
  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    if (word === SPOILER_START_FLAG) {
      wordBlocks.push([word]);
      isSpoiler = true;
    } else if (word === SPOILER_END_FLAG) {
      // wordBlocks[wordBlocks.length - 1][1] = true
      isSpoiler = false;
    } else  if (word === TITLE_START_FLAG) {
      isTitle = true;
    } else if (word === TITLE_END_FLAG) {
      // wordBlocks[wordBlocks.length - 1][2] = true
      isTitle = false;
    } else {
      wordBlocks.push([word, isSpoiler, undefined, isTitle]);
    }
  }

  return (
    <div className="text-container">
      {wordBlocks.map((block, idx) => {
        const word = block[0];
        const isSpoiler = block[1];
        const isLastWordOfSpoiler = block[2]
        const isTitle = block[3]
        if (word === SPOILER_START_FLAG) {
          return (
            <>
              <button onClick={handleShowSpoiler} className="spoiler-button">
                {showSpoiler ? "HIDE" : "SHOW"} SPOILER
              </button>{" "}
            </>
          );
        } else {
          return (
              <div
                key={text.length + word + idx}
                className={classNames(
                  "moving-text",
                  isSpoiler && !showSpoiler ? "hide" : "",
                  isSpoiler ? "spoiler" : "",
                  isTitle ? "italics" : ""
                )}
              >
                {word} <span className={isLastWordOfSpoiler ? "no-highlight" : "" }>&nbsp;</span>
              </div>
          );
        }
      })}
    </div>
  );
};
