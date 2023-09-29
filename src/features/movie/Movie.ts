export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids?: number[] | null;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesState {
  movies: MovieItem[];
  movies_popular: MovieItem[];
  loading: boolean;
  error: string | undefined;
}

export enum MovieLoadingTypes {
  Trend = 1,
  Popular,
}