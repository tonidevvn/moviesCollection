function Header() {
  return (
    <>
      <h1>Welcome.</h1>
      <h1>Millions of movies, TV shows and people to discover. Explore now.</h1>

      <div className="bg-white text-primary rounded-full p-2 flex justify-between my-4">
        <input
          placeholder="Search for a movie, tv show..."
          className="flex-1 p-2 text-lg focus:outline-none"
        ></input>
        <button className="rounded-full bg-primary text-white px-6">
          Search
        </button>
      </div>
    </>
  );
}

export default Header;
