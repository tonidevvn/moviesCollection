import TopPopular from "../../features/movie/TopPopular";
import TopTrending from "../../features/movie/TopTrending";

function Home() {
  return (
    <>
      <TopTrending />
      <TopPopular />
    </>
  );
}

export default Home;
