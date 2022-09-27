export interface IPopular {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface ISearchPageProps {
  searchData: IPopular[];
}

export interface IGenres {
  id: number;
  name: string;
}

export interface IMovieItem {
  movie: IPopular;
  genres: IGenres[];
}

export interface IMenuItem {
  title: string;
  value: string;
  active: boolean;
}

export interface IPageProps {
  active: IMenuItem;
  activeLink: string;
}
export interface IImages {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IAllDataMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: IGenres[] | null;
  homepage: number;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[] | null;
  production_countries: IProductionCountries[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguages[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}
export interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface IMenuNavigateItems {
  title: string;
  value: string;
  active: boolean;
}
export interface ISearchPageReducer {
  movies: IPopular[];
  menuNavigateItems: IMenuNavigateItems[];
}
export interface ISearchPageAction {
  type: number;
  payload: number | IPopular[];
}
