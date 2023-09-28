import { TrendingItem } from "../../models/Movies";

function MovieCard({ cardItem }: { cardItem: TrendingItem }) {
  const { backdrop_path, title, release_date } = cardItem;
  return (
    <div className="w-full p-2 md:w-1/4">
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${backdrop_path}`}
          alt="backdrop"
          className="hover:scale-125 transition duration-700 cursor-pointer"
        />

        <div className="absolute bottom-0 left-0 right-0 opacity-60 bg-primary text-white p-2 py-4">
          <h6 className="truncate">{title}</h6>
          <p>{release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
