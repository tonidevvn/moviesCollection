import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import MovieCard from "./MovieCard";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchTrendingMoviesAsync, movieSelector } from "./movieSlice";

function TopTrending() {
  const TOP_TREND_NO = 8;
  const TOP_TREND_MAX = 20;
  const movieData = useAppSelector(movieSelector);
  const dispatch = useAppDispatch();
  const [topTrends, setTopTrends] = useState<MovieItem[]>([]);
  const [topTrendsNo, setTopTrendsNo] = useState<number>(TOP_TREND_NO);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      console.log(">>> fetching data ...");
      console.log(
        "🚀 ~ file: TopTrending.tsx:29 ~ useEffect ~ movieData:",
        movieData
      );
      dispatch(fetchTrendingMoviesAsync());
    }

    console.log(
      "🚀 ~ file: TopTrending.tsx:30 ~ useEffect ~ movieData.movies:",
      movieData.movies_trending
    );
    // check if already fetching api before
    if (movieData.movies_trending?.length) {
      setTopTrends(movieData.movies_trending);
    } else {
      // first call and need to fetch api
      fetchData();
    }
  }, []);

  useEffect(() => {
    setTopTrends(movieData.movies_trending);
  }, [movieData]);

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
          <Loading isLoading={true} />
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
          className="btn mt-4 shadow shadow-gray-400 hover:transform duration-300 hover:text-2xl"
          onClick={() => loadingMoreProcessing()}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default TopTrending;
