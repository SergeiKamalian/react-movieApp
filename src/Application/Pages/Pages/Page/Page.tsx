import { useCallback, useEffect, useState } from "react"
import { getMovies, getMoviesByName } from "../../../../Api/Api"
import { IGenres, IPageProps, IPopular } from "../../../../module"
import MovieItem from "./MovieItem"
import { FC } from "react"
import Loader from "../../../Components/Loader/Loader"

const Page: FC<IPageProps> = ({ active, activeLink }) => {
    const [data, setData] = useState<IPopular[]>([])
    const localeGenres: string = localStorage.getItem('genres')!;
    const genres: IGenres[] = JSON.parse(localeGenres)
    const getData = useCallback(async () => {
        try {
            const newdata = await getMovies(activeLink)
            setData(newdata)
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        getData()
    }, [activeLink])
    return (
        <div className="thisPage">
            <div className="Page">
                <h1>{active.title}:</h1>
                {!data.length ? <Loader /> :
                    <div className="pageContent">
                        {data.map((movie) => (
                            <MovieItem movie={movie} key={movie.id} genres={genres} />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Page