import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
         MainContainer
          -Videobackground
          - VideoTitle
         Secondary Container
          - Movielist * n
             - cards * n
       */}
    </div>
  );
};
export default Browse;
