export const Review = ({ title, text }) => {
  return (
    <div className="review-container">
      <div className="title">{title}</div>
      <div>{text}</div>
    </div>
  );
};
