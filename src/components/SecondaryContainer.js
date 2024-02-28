import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.addNowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-12 pl-2 md:pl-6 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.addNowPlayingMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.addNowPlayingMovies} />
          <MovieList
            title={"Horror Movies"}
            movies={movies.addNowPlayingMovies}
          />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.addNowPlayingMovies}
          />
          {/* 
     Movie list - Popular
      Movie Cards * N
     Movie list - Trending
     Movie list - Now playing
     Movie list - Horror
    */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
