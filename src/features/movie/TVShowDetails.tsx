import { useState, useEffect } from "react";
import moment from "moment";
import { MovieVideo, TVDetails } from "./interface";
import { fetchTVVideos } from "./movieAPI";

function TVShowDetails({ cardItem }: { cardItem: TVDetails }) {
  const {
    id,
    backdrop_path,
    poster_path,
    name,
    first_air_date,
    overview,
    tagline,
    genres,
    spoken_languages,
    production_countries,
    vote_average,
    production_companies,
  } = cardItem;

  const [officialTrailer, setOfficialTrailer] = useState<MovieVideo>();
  const [showingTrailerYtb, setShowingTrailerYtb] = useState<boolean>();

  const handleWatchTrailer = (): void => {
    setShowingTrailerYtb(true);
  };

  useEffect(() => {
    async function fetchData() {
      console.log(">>> fetching data ...");
      if (id) {
        const res = await fetchTVVideos(id);
        const relatedVideos: MovieVideo[] = res;
        console.log(
          "🚀 ~ file: MovieDetails.tsx:36 ~ fetchData ~ relatedVideos:",
          relatedVideos
        );
        const trailers: MovieVideo[] = relatedVideos.filter((vd) => {
          return (
            vd.name.toLowerCase().includes("trailer") &&
            vd.site.toLowerCase().includes("youtube")
          );
        });
        console.log(
          "🚀 ~ file: MovieDetails.tsx:43 ~ consttrailers:MovieVideo[]=relatedVideos.filter ~ trailers:",
          trailers
        );

        setOfficialTrailer(trailers[0] || relatedVideos[0]);
      }
    }

    // first call and need to fetch api
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="relative w-full overflow-hidden from-slate-400 rounded-md shadow shadow-gray-400 hover:shadow-md hover:shadow-gray-400">
          <div className="relative flex flex-wrap z-10">
            <div className="w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                alt="poster"
                className="w-full opacity-80 cursor-pointer rounded-md"
              />
            </div>
            <div className="w-full flex flex-col p-4 align-middle md:w-2/3">
              <h2>
                {name} ({moment(first_air_date).format("yyyy")})
              </h2>
              <div>
                <span className="px-3 mr-1 border border-gray-400">R</span>
                <span>{moment(first_air_date).format("MM/DD/yyyy")} </span>
                {" • "}
                {genres.map((genre, index) => (
                  <span key={index} className="font-medium">
                    {index > 0 ? ", " : ""}
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="flex flex-wrap align-middle items-center">
                <span className="flex text-orange-400 hover:text-orange-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-star-half my-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>
                  <span className="ml-2 font-bold ">
                    {vote_average.toFixed(1)} User Score
                  </span>
                </span>{" "}
                <span className="ml-2">
                  {officialTrailer ? (
                    <a
                      href="#"
                      className="flex align-middle font-semibold hover:opacity-80"
                      onClick={handleWatchTrailer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                      Watch trailer
                    </a>
                  ) : (
                    <></>
                  )}
                </span>
              </p>
              <p>
                <span className="mr-2 font-semibold">Production Companies</span>
                {production_companies.map((company, index) => (
                  <span key={index} className="font-medium text-gray-600">
                    {index > 0 ? ", " : ""}
                    {company.name}
                  </span>
                ))}
              </p>
              <div>
                <h3 className="italic text-sm text-gray-400 font-montserrat py-2">
                  {tagline}
                </h3>
                <h3 className="my-2">Overview</h3>
                <div>{overview}</div>
              </div>
              <div className="flex my-3">
                <div className="w-1/2">
                  <p>Production Countries</p>
                  <p className="font-semibold">
                    {production_countries.map((enName, index) => (
                      <span key={index} className="mr-2">
                        <a href="#">{enName.name}</a>
                      </span>
                    ))}
                  </p>
                </div>
                <div className="w-1/2">
                  <p>Spoken Languages</p>
                  <p className="font-semibold">
                    {spoken_languages.map((enName, index) => (
                      <span key={index} className="mr-2">
                        <a href="#">{enName.english_name}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute z-0 top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(
            https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}
          )`,
              backgroundPosition: "center top",
              backgroundBlendMode: "difference",
            }}
          ></div>

          <div
            className={`${
              showingTrailerYtb
                ? "opacity-100 visible"
                : "opacity-0 invisible transition-all duration-300 ease-out"
            }`}
          >
            <div
              className="fixed top-0 left-0 w-full h-full opacity-60 z-40 bg-gray-400"
              onClick={() => setShowingTrailerYtb(false)}
            ></div>
            <div className="fixed top-1/2 left-0 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 m-auto w-full h-2/3 md:w-1/2 md:h-2/3 opacity-100 z-50">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${officialTrailer?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TVShowDetails;
