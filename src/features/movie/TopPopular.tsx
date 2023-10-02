import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { MovieItem } from "./interface";
import MovieCard from "./MovieCard";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchPopularMoviesAsync, movieSelector } from "./movieSlice";

function TopPopular() {
  const TOP_POPULAR_NO = 8;
  const TOP_POPULAR_MAX = 12;
  const movieData = useAppSelector(movieSelector);
  const dispatch = useAppDispatch();
  const [topPopulars, setTopPopulars] = useState<MovieItem[]>([]);
  const [topPopularsNo, setTopPopularsNo] = useState<number>(TOP_POPULAR_NO);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      console.log(">>> fetching data ...");
      console.log(
        "🚀 ~ file: TopTrending.tsx:29 ~ useEffect ~ movieData:",
        movieData
      );
      dispatch(fetchPopularMoviesAsync());
    }

    console.log(
      "🚀 ~ file: TopTrending.tsx:30 ~ useEffect ~ movieData.movies_popular:",
      movieData.movies_popular
    );
    // check if already fetching api before
    if (movieData.movies_popular?.length) {
      setTopPopulars(movieData.movies_popular);
    } else {
      // first call and need to fetch api
      fetchData();
    }
  }, []);

  useEffect(() => {
    setTopPopulars(movieData.movies_popular);
  }, [movieData]);

  const loadingMoreProcessing = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTopPopularsNo((prev) =>
        prev + TOP_POPULAR_NO > TOP_POPULAR_MAX
          ? TOP_POPULAR_MAX
          : prev + TOP_POPULAR_NO
      );

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="mt-4">
      <h2 className="border-b border-primary mb-6 pb-2">What's Popular</h2>
      <div className="flex flex-row flex-wrap">
        {!topPopulars ? (
          <Loading isLoading={true} />
        ) : (
          <>
            {topPopulars.slice(0, topPopularsNo).map((trendingItem, index) => (
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

export default TopPopular;
