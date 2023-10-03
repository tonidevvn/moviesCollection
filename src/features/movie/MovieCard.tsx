import moment from "moment";
import { Link } from "react-router-dom";
import { MovieItem } from "./interface";

function MovieCard({ cardItem }: { cardItem: MovieItem }) {
  const { id, backdrop_path, title, release_date, vote_average, media_type } =
    cardItem;

  return (
    <>
      <div className="w-1/2 md:w-1/4 p-2">
        <div className="relative overflow-hidden rounded-md shadow shadow-gray-400 hover:shadow-md hover:shadow-gray-400">
          <Link to={`/${media_type ?? "movie"}/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${backdrop_path}`}
              alt="backdrop"
              className="w-full hover:scale-125 transition ease-in-out duration-700 cursor-pointer"
            />

            <div className="absolute bottom-0 left-0 right-0 opacity-60 bg-primary text-white p-2 py-4 cursor-pointer hover:opacity-80">
              <h6 className="truncate">{title}</h6>
              <p>{moment(release_date).format("MMM DD, yyyy")}</p>
              <p className="text-orange-300 flex align-middle items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
                <span className="ml-2 inline-block font-bold">
                  {vote_average.toFixed(1)}
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
