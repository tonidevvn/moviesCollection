import Header from "../../components/Header";
import TopPopular from "../../features/movie/TopPopular";
import TopTrending from "../../features/movie/TopTrending";

function Home() {
  return (
    <>
      <Header />
      <TopTrending />
      <TopPopular />
    </>
  );
}

export default Home;
