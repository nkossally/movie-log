import classNames from "classnames";
import { useState } from "react";

export const Spoiler = ({ words }) => {
  const [showSpoiler, setShowSpoiler] = useState(false);

  const handleShowSpoiler = () => {
    setShowSpoiler(!showSpoiler);
  };

  return (
    <div className="text-container" key={"spoiler" + words.length + words[0]}>
      <button onClick={handleShowSpoiler} className="spoiler-button">
        {" "}
        {showSpoiler ? "HIDE" : "SHOW"} SPOILER
      </button>
      {showSpoiler &&
        words.map((word, idx) => {
          return (
            <div
              key={"spoiler" + word + idx}
              className={classNames("moving-text", "spoiler-text")}
            >
              {word}&nbsp;
            </div>
          );
        })}
    </div>
  );
};
