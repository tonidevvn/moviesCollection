import TopPopular from "../../features/movie/TopPopular";
import TopTrending from "../../features/movie/TopTrending";

function Movies() {
  return (
    <div>
      <TopTrending />
      <TopPopular />
    </div>
  );
}

export default Movies;
