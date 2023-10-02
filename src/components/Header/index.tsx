import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setQuery("");
    navigate(`/search?query=${query}`);
  };
  return (
    <>
      <h1>Welcome.</h1>
      <h1>Millions of movies, TV shows and people to discover. Explore now.</h1>

      <div className="bg-white text-primary rounded-full p-2 flex justify-between my-4 shadow-md overflow-hidden">
        <input
          placeholder="Search for a movie, tv show..."
          className="flex-1 p-2 text-lg focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button
          className="rounded-full bg-primary opacity-80 text-white text-2xl font-semibold px-6 hover:opacity-100 transition-all ease-in-out duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Header;
