import Header from "../../components/Header";
import TopPopular from "../../features/movie/TopPopular";
import TopTrending from "../../features/movie/TopTrending";
import { MediaTypes } from "../../features/movie/interface";

function Home() {
  return (
    <>
      <Header />
      <TopTrending />
      <TopPopular mediaType={MediaTypes.Movie} />
    </>
  );
}

export default Home;
