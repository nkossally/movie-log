import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { useLocation } from 'react-router-dom';
import { getMovieImage } from "../fetch";
import { Divider } from "./Divider";
import { Text } from "./Text";
import classNames from "classnames";

export const Review = forwardRef((props, ref) => {
  const [imgUrl, setImgUrl] = useState("");

  const location = useLocation();
  const currentURL = location.pathname + location.search + location.hash;

  const isHome = !currentURL.includes("?title=")

  useEffect(() => {
    if(!isHome){
      window.scrollTo(0, 0);
    }
  }, [isHome]);

  useEffect(() => {
    const getImageWrapper = async () => {
      const imgUrlStr = await getMovieImage(props.title);
      setImgUrl(imgUrlStr);
    };
    getImageWrapper();
  }, []);

  const hasMultipleWriters =
    props.writer && props.writer.split("").includes(",");

    const title = props.title
    const reviewPath = "?title=" + title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="review-container" ref={ref}>
      <div className="title-and-date-and-image">
        <div className="title-and-date">
          <div className="title-container">
            {!isHome && <div className={classNames("title")}>{title}</div>}

            {isHome && <Link className={classNames("title")} to={reviewPath}>
              {title}
            </Link>}
            {props.rating && (
              <div className={classNames("rating")}>
                &nbsp;{props.rating}/10
              </div>
            )}
          </div>
          <div className="movie-data">
            <div>{props.date}</div>
            {props.director && <div>Director: {props.director}</div>}
            {props.writer && (
              <div>
                {" "}
                {`Writer${hasMultipleWriters ? "s" : ""}: ${props.writer}`}
              </div>
            )}
            {props.releaseDate && <div>Released: {props.releaseDate}</div>}
            {props.theater && <div>Theater: {props.theater}</div>}
          </div>
        </div>
        {imgUrl && <img className="movie-poster" src={imgUrl} />}
      </div>
      {props.text && (
        <div className="text">
          <Text text={props.text} />
        </div>
      )}
      {props.text2 && (
        <>
          <br />
          <div className="text2">
            <Text text={props.text2} />
          </div>
        </>
      )}
      {props.text3 && (
        <>
          <br />
          <div className="text2">
            <Text text={props.text3} />
          </div>
        </>
      )}
      {props.text4 && (
        <>
          <br />
          <div className="text2">
            <Text text={props.text4} />
          </div>
        </>
      )}
      {props.paragraphs && (
        <>
          {props.paragraphs.map((paragraph, idx) => {
            return (
              <div key={idx + paragraph.slice(0, 7)}>
                {idx > 0 && <br />}
                <div className="text2">
                  <Text text={paragraph} />
                </div>
              </div>
            );
          })}
        </>
      )}

      <Divider />
    </div>
  );
});
