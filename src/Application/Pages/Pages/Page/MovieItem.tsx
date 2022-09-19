import { FC, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { sprintData } from "../../../../Functions/Functions"
import { IMovieItem } from "../../../../module"


const MovieItem: FC<IMovieItem> = ({ movie, genres }) => {

    return (
        <Link to={`/movies/${movie.id}`}>
            <div className="MovieItem">
                <div className="info">
                    {movie.overview.slice(0, 400).concat('..')}
                </div>
                <div
                    className="img"
                    style={(movie.poster_path
                        ? { backgroundImage: `url('http://image.tmdb.org/t/p/w500${movie.poster_path}')` }
                        : { backgroundImage: `url('https://i.imgur.com/yZ0GNkQ.png')` }
                    )}
                >
                    <div className="rating"
                        style={(movie.vote_average > 5 ? { color: '#f7b016' } : { color: '#f71616' })}
                    >{movie.vote_average}
                    </div>
                </div>
                <div className="information">


                    <div className="title">{movie.title}</div>
                    <div className="subTitle">{movie.release_date}</div>
                    <div className="genres">{sprintData(movie.genre_ids, genres)}</div>
                </div>
            </div>
        </Link>
    )
}

export default MovieItem