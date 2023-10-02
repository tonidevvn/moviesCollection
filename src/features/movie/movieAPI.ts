import axios, { AxiosRequestConfig } from "axios";
import { MovieLoadingTypes } from "./interface";

const TRENDING_MOVIE_API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const POPULAR_MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const QUERY_MOVIE_API_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const MOVIE_DETAILS_API_URL = "https://api.themoviedb.org/3/movie/";

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

export const fetchMovieVideos = async (id: number) => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const url = `${MOVIE_DETAILS_API_URL}${id}/videos?language=en-US`;
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieQuery = async (query: string) => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const url = `${QUERY_MOVIE_API_URL}&query=${query}`;
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const url = `${MOVIE_DETAILS_API_URL}${id}?language=en-US`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
