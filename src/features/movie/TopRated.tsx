import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTopRatedMoviesAsync,
  fetchTopRatedTVShowsAsync,
  movieSelector,
} from "./movieSlice";
import Loading from "../../components/Loading";
import MovieCard from "./MovieCard";
import TVShowCard from "./TVShowCard";
import { MediaTypes } from "./movieAPI";

function TopRated({ mediaType }: { mediaType: MediaTypes }) {
  const TOP_TREND_NO = 8;
  const TOP_TREND_MAX = 20;
  const movieData = useAppSelector(movieSelector);
  const dispatch = useAppDispatch();
  const [topRated, setTopRated] = useState<MovieItem[] | TVShowItem[]>([]);
  const [topRatedNo, setTopRatedNo] = useState<number>(TOP_TREND_NO);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      console.log(">>> fetching data ...");
      console.log(
        "🚀 ~ file: TopRated.tsx:29 ~ useEffect ~ movieData:",
        movieData
      );

      if (mediaType === MediaTypes.Movie) {
        dispatch(fetchTopRatedMoviesAsync());
      } else {
        dispatch(fetchTopRatedTVShowsAsync());
      }
    }

    if (mediaType === MediaTypes.Movie) {
      // check if already fetching api before
      if (movieData.movies_toprated?.length) {
        setTopRated(movieData.movies_toprated);
      } else {
        // first call and need to fetch api
        fetchData();
      }
    } else {
      // check if already fetching api before
      if (movieData.tvshows_toprated?.length) {
        setTopRated(movieData.tvshows_toprated);
      } else {
        // first call and need to fetch api
        fetchData();
      }
    }
  }, []);

  useEffect(() => {
    if (mediaType === MediaTypes.Movie) {
      setTopRated(movieData.movies_toprated);
    } else {
      setTopRated(movieData.tvshows_toprated);
    }
  }, [movieData]);

  const loadingMoreProcessing = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTopRatedNo((prev) =>
        prev + TOP_TREND_NO > TOP_TREND_MAX
          ? TOP_TREND_MAX
          : prev + TOP_TREND_NO
      );

      setIsLoading(false);
    }, 2000);
  };

  console.log(
    "🚀 ~ file: TopRated.tsx:30 ~ useEffect ~ movieData.movies_toprated:",
    movieData
  );

  return (
    <div className="mt-4">
      <h2 className="border-b border-primary mb-6 pb-2">
        Top Rated {mediaType === MediaTypes.Movie ? "Movies" : "TV Shows"}{" "}
      </h2>
      <div className="flex flex-row flex-wrap">
        {!topRated ? (
          <Loading isLoading={true} />
        ) : (
          <>
            {topRated.slice(0, topRatedNo).map((item, index) => {
              return mediaType === MediaTypes.Movie ? (
                <MovieCard cardItem={item as MovieItem} key={index} />
              ) : (
                <TVShowCard cardItem={item as TVShowItem} key={index} />
              );
            })}
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

export default TopRated;
