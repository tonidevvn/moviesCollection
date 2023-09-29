import { MovieItem } from "./Movie";

function QueryCard({ cardItem }: { cardItem: MovieItem }) {
  const { backdrop_path, title, release_date, overview } = cardItem;
  return (
    <div className="flex flex-row w-full my-4 rounded-md border border-gray-300 shadow shadow-gray-300 hover:shadow-md hover:shadow-gray-300">
      <div className="w-26 min-w-fit cursor-pointer rounded-s-md overflow-hidden">
        {backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${backdrop_path}`}
            alt="backdrop"
            className="w-fit cursor-pointer"
          />
        ) : (
          <div className="flex justify-center align-middle items-center w-24 h-36 bg-gray-300 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex-auto cursor-pointer p-3 overflow-clip">
        <h5 className="truncate">{title}</h5>
        <p className="font-montserrat text-gray-500">{release_date}</p>
        <p className="font-montserrat text-sm line-clamp-3">{overview}</p>
      </div>
    </div>
  );
}

export default QueryCard;
