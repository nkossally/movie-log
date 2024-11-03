const token1 =  "47f8e6e8b2652b49ec97b024b3091d1b"

const token2 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2Y4ZTZlOGIyNjUyYjQ5ZWM5N2IwMjRiMzA5MWQxYiIsIm5iZiI6MTczMDYzNjE2Mi4zOTUyMzg5LCJzdWIiOiI2NzI3Njg4MzcyMGYwNDc2ZjYwZDg2MTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i0h3Z_Vnl0JqlxVlRJllOP9pZdB7ep0flUBxE_iPEos"

const imageUrlBase = "https://image.tmdb.org/t/p/original"

export const getMovieImage = async ( title ) => {
  const url =
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${token2}`,
    },
  };
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    const imgUrlSuffix = json?.results[0]?.backdrop_path;
    if(!imgUrlSuffix) return "";
    return imageUrlBase + imgUrlSuffix;
  } catch {}
};
