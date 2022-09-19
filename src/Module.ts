export interface IPopular {
    adult: boolean
    backdrop_path: string | null
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface INavigationProps {
    setSearchValue: React.Dispatch<React.SetStateAction<IPopular[]>>
}

export interface ISearchPageProps {
    searchData: IPopular[]
}

export interface IGenres {
    id: number
    name: string
}

export interface IMovieItem {
    movie: IPopular
    genres: IGenres[]
}

export interface IMenuItem {
    title: string
    value: string
    active: boolean
}

export interface IPageProps {
    active: IMenuItem
    activeLink: string
    setLoader: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IPagesProps {
    setLoader: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IImages {
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: string | null
    vote_average: number
    vote_count: number
    width: number
} 