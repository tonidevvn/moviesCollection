import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieQueryResult from "../../features/movie/QueryResult";

function Search() {
  const [searchParams] = useSearchParams();

  // Get a specific query parameter
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:9 ~ Search ~ query:", query);
  }, [query]);

  return (
    <div>
      <MovieQueryResult query={query} />{" "}
    </div>
  );
}

export default Search;
