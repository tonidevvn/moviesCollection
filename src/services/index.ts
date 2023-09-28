import axios, { AxiosRequestConfig } from "axios";

export const moviesDb = async () => {
  try {
    const options: AxiosRequestConfig = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${
          import.meta.env.VITE_DBMOVIES_READ_ACCESS_TOKEN
        }`,
      },
    };

    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
