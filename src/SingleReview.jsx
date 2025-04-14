import { useLocation } from "react-router-dom";
import { REVIEWS } from "./Reviews";
import Home from "./Home";

const BASE = "/movie-log";

export const SingleReview = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const suffix = currentPath.slice(BASE.length + 1).toLowerCase();

  const reviewIdx = REVIEWS.findIndex((review) => {
    return review.props.title.toLowerCase().replace(/ /g, "-") === suffix;
  });

  return (
    <>
      {reviewIdx === -1 && <Home />}
      {reviewIdx != -1 && REVIEWS[reviewIdx] }
    </>
  );
};
