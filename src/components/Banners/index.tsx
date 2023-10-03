import BgBannerBottom from "../../assets/bannerBottom.jpg";

function BannerBottom() {
  return (
    <div
      className="flex flex-col md:flex-row text-yellow-50 mt-10 rounded-md overflow-hidden"
      style={{
        backgroundImage: `url(${BgBannerBottom})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-2/3 p-4">
        <h2 className="my-2 cursor-pointer">Join Today</h2>
        <div>
          Get access to maintain your own custom personal lists, track what
          you've seen and search and filter for what to watch next—regardless if
          it's in theatres, on TV or available on popular streaming services
          like Netflix, Disney Plus, Amazon Prime Video, Hayu, and Crave.
        </div>
        <div>
          <button className="rounded-md bg-purple-500 hover:bg-purple-800 duration-300 ease-in-out transition-all text-white font-semibold my-2 px-4 py-2">
            Sign Up
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <ul className="list-disc list-outside ml-5">
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>
            Filter by your subscribed streaming services and find something to
            watch
          </li>
          <li>Log the movies and TV shows you've seen</li>
          <li>Build custom lists</li>
          <li>Contribute to and improve our database</li>
        </ul>
      </div>
    </div>
  );
}

export default BannerBottom;
