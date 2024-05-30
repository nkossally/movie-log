export const Review = ({ title, text, text2, rating, date }) => {
  return (
    <div className="review-container">
      <div className="title-and-date">
        <div className="title-container">
          <div className="title">{title}</div>
          {rating && <div className="rating"> {rating}/10</div>}
        </div>
        <div>{date}</div>
      </div>

      <div>{text}</div>
      <div className="text2">{text2}</div>
    </div>
  );
};
