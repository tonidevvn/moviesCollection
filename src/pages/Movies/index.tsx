import TopPopular from "../../features/movie/TopPopular";
import TopRated from "../../features/movie/TopRated";
import { MediaTypes } from "../../features/movie/interface";

function Movies() {
  return (
    <div>
      <TopRated mediaType={MediaTypes.Movie} />
      <TopPopular mediaType={MediaTypes.Movie} />
    </div>
  );
}

export default Movies;
