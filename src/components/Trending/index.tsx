import { useEffect, useState } from "react";
import { moviesDb } from "../../services";
import Loading from "../Loading";
import { MovieItem } from "../../models/Movies";
import MovieCard from "./MovieCard";

function Trending() {
  const TOP_TREND_NO = 8;
  const TOP_TREND_MAX = 20;
  const [topTrends, setTopTrends] = useState<MovieItem[]>([]);
  const [topTrendsNo, setTopTrendsNo] = useState<number>(TOP_TREND_NO);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const results = await moviesDb();
      setTopTrends(results);
      console.log("🚀 ~ file: index.tsx:28 ~ fetchData ~ results:", results);
    }

    fetchData();
  }, []);

  const loadingMoreProcessing = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTopTrendsNo((prev) =>
        prev + TOP_TREND_NO > TOP_TREND_MAX
          ? TOP_TREND_MAX
          : prev + TOP_TREND_NO
      );

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="mt-4">
      <h2 className="border-b border-primary mb-6 pb-2">Trending</h2>
      <div className="flex flex-row flex-wrap">
        {!topTrends ? (
          <span>Loading ...</span>
        ) : (
          <>
            {topTrends.slice(0, topTrendsNo).map((trendingItem, index) => (
              <MovieCard cardItem={trendingItem} key={index} />
            ))}
          </>
        )}
      </div>
      <Loading isLoading={isloading} />
      <div className="flex justify-center">
        <button
          type="button"
          className="btn shadow shadow-gray-400 hover:transform duration-300 hover:text-2xl"
          onClick={() => loadingMoreProcessing()}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default Trending;
