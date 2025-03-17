import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies || movies.length === 0) return;
  return (
    <div className="px-6 overflow-hidden ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies.map((movie) =>
            movie.poster_path ? (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
