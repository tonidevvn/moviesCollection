import BannerBottom from "../../components/Banners";
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
      <BannerBottom />
    </>
  );
}

export default Home;
