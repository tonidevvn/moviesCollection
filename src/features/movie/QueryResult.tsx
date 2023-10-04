import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { fetchMovieQuery } from "./movieAPI";
import QueryCard from "./QueryCard";

interface IProps {
  query: string;
}

function MovieQueryResult(props: IProps) {
  const [queryResults, setQueryResults] = useState<MovieItem[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      console.log(">>> fetching data ...");
      const res = await fetchMovieQuery(props.query);
      setQueryResults(res);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="border-b border-primary mb-6 pb-2">
        Search results for '{props.query}'
      </h2>
      <div className="flex flex-row flex-wrap">
        {isloading ? (
          <Loading isLoading={true} />
        ) : (
          <>
            {queryResults.map((queryItem, index) => (
              <QueryCard cardItem={queryItem} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MovieQueryResult;
