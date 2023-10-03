import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTVShowDetails } from "../../features/movie/movieAPI";
import { TVDetails } from "../../features/movie/interface";
import Loading from "../../components/Loading";
import TVShowDetails from "../../features/movie/TVShowDetails";

function TVDetails() {
  // Get the userId param from the URL.
  const { id } = useParams();

  const [selectedMovie, setSelectedMovie] = useState<TVDetails>();

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:9 ~ Details ~ movieId:", id);

    async function fetchData() {
      console.log(">>> fetching data ...");
      if (id) {
        const res = await fetchTVShowDetails(id);
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
        <TVShowDetails cardItem={selectedMovie} />
      ) : (
        <Loading isLoading={true} />
      )}
    </div>
  );
}

export default TVDetails;
