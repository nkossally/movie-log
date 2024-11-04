import { forwardRef, useEffect, useState } from "react";
import { getMovieImage } from "../fetch";

export const Review = forwardRef((props, ref) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(()=> {
    const getImageWrapper = async () =>{
      const imgUrlStr = await getMovieImage(props.title);
      setImgUrl(imgUrlStr)
    }
    getImageWrapper();

  },[])

  return (
    <div className="review-container" ref={ref}>
      <div className="title-and-date-and-image">
        <div className="title-and-date">
          <div className="title-container">
            <div className="title">{props.title}</div>
            {props.rating && (
              <div className="rating">&nbsp;{props.rating}/10</div>
            )}
          </div>
          <div>{props.date}</div>
          {props.director && <div>Director: {props.director}</div>}
          {props.releaseDate && <div>Released: {props.releaseDate}</div>}
        </div>
        <img className="movie-poster" src={imgUrl} />
      </div>

      <div className="text">{props.text}</div>
      {props.text2 && <div className="text2">{props.text2}</div>}
      {props.text3 && <div className="text2">{props.text3}</div>}
      {props.text4 && <div className="text2">{props.text4}</div>}
    </div>
  );
});
