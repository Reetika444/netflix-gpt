import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if (movies == undefined) return;
  const mainMovie = movies[0];

  const { title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 bg-black pt-[10%]">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
