import { forwardRef, useEffect, useState } from "react";
import { getMovieImage } from "../fetch";
import { Divider } from "./Divider";
import classNames from "classnames";

export const Review = forwardRef((props, ref) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImageWrapper = async () => {
      const imgUrlStr = await getMovieImage(props.title);
      setImgUrl(imgUrlStr);
    };
    getImageWrapper();
  }, []);

  return (
    <div className="review-container" ref={ref}>
      <div className="title-and-date-and-image">
        <div className="title-and-date">
          <div className="title-container">
            <div className="title">{props.title}</div>
            {props.rating && (
              <div className={classNames("rating", "spin-y-on-hover")}>&nbsp;{props.rating}/10</div>
            )}
          </div>
          <div>{props.date}</div>
          {props.director && <div>Director: {props.director}</div>}
          {props.releaseDate && <div>Released: {props.releaseDate}</div>}
          {props.theater && <div>Theater: {props.theater}</div>}
        </div>
          {imgUrl && <img className="movie-poster" src={imgUrl} />}
      </div>

      <div className="text">{props.text}</div>
      {props.text2 && (
        <>
          <br />
          <div className="text2">{props.text2}</div>
        </>
      )}
      {props.text3 && (
        <>
          <br />
          <div className="text2">{props.text3}</div>
        </>
      )}
      {props.text4 && (
        <>
          <br />
          <div className="text2">{props.text4}</div>
        </>
      )}
      <Divider />
    </div>
  );
});
