import { forwardRef } from "react";

export const Review = forwardRef((props, ref) => {
  return (
    <div className="review-container" ref={ref}>
      <div className="title-and-date">
        <div className="title-container">
          <div className="title">{props.title}</div>
          {props.rating && <div className="rating"> {props.rating}/10</div>}
        </div>
        <div>{props.date}</div>
      </div>

      <div>{props.text}</div>
      <div className="text2">{props.text2}</div>
    </div>
  );
});
