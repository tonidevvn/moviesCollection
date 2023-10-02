import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../features/movie/movieAPI";
import { MovieDetails } from "../../features/movie/interface";
import MovieCardDetails from "../../features/movie/MovieDetails";
import Loading from "../../components/Loading";

function Details() {
  // Get the userId param from the URL.
  const { id } = useParams();

  const [selectedMovie, setSelectedMovie] = useState<MovieDetails>();

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:9 ~ Details ~ movieId:", id);

    async function fetchData() {
      console.log(">>> fetching data ...");
      if (id) {
        const res = await fetchMovieDetails(id);
        console.log("🚀 ~ file: Details.tsx:18 ~ fetchData ~ res:", res);
        setSelectedMovie(res);
      }
    }

    // first call and need to fetch api
    fetchData();
  }, []);

  return (
    <div>
      {selectedMovie ? (
        <MovieCardDetails cardItem={selectedMovie} />
      ) : (
        <Loading isLoading={true} />
      )}
    </div>
  );
}

export default Details;
