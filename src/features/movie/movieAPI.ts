import axios, { AxiosRequestConfig } from "axios";

const TRENDING_MOVIE_API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const POPULAR_MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const POPULAR_TVSHOW_API_URL =
  "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";

const TOP_RATED_MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const TOP_RATED_TVSHOW_API_URL =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

const QUERY_MOVIE_API_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const MOVIE_DETAILS_API_URL = "https://api.themoviedb.org/3/movie/";

const TVSHOW_DETAILS_API_URL = "https://api.themoviedb.org/3/tv/";

export const enum MovieLoadingTypes {
  Trend = 1,
  Popular,
  TopRated,
}

export const enum MediaTypes {
  Movie = 1,
  TVShow,
}

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
        : type === MovieLoadingTypes.Trend
        ? TRENDING_MOVIE_API_URL
        : TOP_RATED_MOVIE_API_URL;

    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTVShows = async (type = MovieLoadingTypes.Trend) => {
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
        ? POPULAR_TVSHOW_API_URL
        : type === MovieLoadingTypes.Trend
        ? TRENDING_MOVIE_API_URL
        : TOP_RATED_TVSHOW_API_URL;

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

export const fetchTVVideos = async (id: number) => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const url = `${TVSHOW_DETAILS_API_URL}${id}/videos?language=en-US`;

    console.log("🚀 ~ file: movieAPI.ts:108 ~ fetchTVVideos ~ url:", url);
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

export const fetchTVShowDetails = async (id: string) => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const url = `${TVSHOW_DETAILS_API_URL}${id}?language=en-US`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
