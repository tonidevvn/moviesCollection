import TopPopular from "../../features/movie/TopPopular";
import TopRated from "../../features/movie/TopRated";
import { MediaTypes } from "../../features/movie/movieAPI";

function TVShows() {
  return (
    <div>
      <TopRated mediaType={MediaTypes.TVShow} />
      <TopPopular mediaType={MediaTypes.TVShow} />
    </div>
  );
}

export default TVShows;
