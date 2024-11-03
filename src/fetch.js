// 47f8e6e8b2652b49ec97b024b3091d1b

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2Y4ZTZlOGIyNjUyYjQ5ZWM5N2IwMjRiMzA5MWQxYiIsIm5iZiI6MTczMDYzNjE2Mi4zOTUyMzg5LCJzdWIiOiI2NzI3Njg4MzcyMGYwNDc2ZjYwZDg2MTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i0h3Z_Vnl0JqlxVlRJllOP9pZdB7ep0flUBxE_iPEos


// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' 

// https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg

export const tryThis = async (title) => {
  let img;
  const url =
    "https://api.themoviedb.org/3/search/movie?query=Anora&include_adult=false&language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 47f8e6e8b2652b49ec97b024b3091d1b",
    },
  };
  try {
    // const resp = await fetch("https://api.themoviedb.org/3/movie/550?api_key=47f8e6e8b2652b49ec97b024b3091d1b")
    const resp = await fetch(url, options);
    const json = await resp.json();
    console.log(json);
    return img;
  } catch {}
};