import axios, { AxiosRequestConfig } from "axios";
import { MovieLoadingTypes } from "./Movie";

const TRENDING_MOVIE_API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const POPULAR_MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const fetchMovies = async (type = MovieLoadingTypes.Trend) => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const url =
      type === MovieLoadingTypes.Popular
        ? POPULAR_MOVIE_API_URL
        : TRENDING_MOVIE_API_URL;

    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
