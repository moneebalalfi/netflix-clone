const getRandomMovie = (data: TMovies) => {
  return data[Math.floor(Math.random() * (data.length - 1))];
};

export default getRandomMovie;
