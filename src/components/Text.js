export const Text = ({ text }) => {
  const wordsArr = text.split(" ");

  return (
    <div className="text-container">
      {wordsArr.map((word) => {
        return <div className="moving-text">{word}&nbsp;</div>;
      })}
    </div>
  );
};
