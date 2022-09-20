import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from 'react'
import { getImagesById, getMovieById } from "../../../../Api/Api";
import { IAllDataMovie, IImages } from "../../../../module";
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';
import { AiOutlineFieldTime, AiOutlineDollar } from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';


const SelfMovie = ({ setImgFon }: { setImgFon: React.Dispatch<React.SetStateAction<string>> }) => {
    const [images, setImages] = useState<IImages[]>([])
    const [movieData, setMovieData] = useState<IAllDataMovie>({
        adult: false,
        backdrop_path: '',
        belongs_to_collection: null,
        budget: 0,
        genres: null,
        homepage: 0,
        id: 0,
        imdb_id: '',
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        production_companies: null,
        production_countries: null,
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages: null,
        status: '',
        tagline: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    })
    const params = useParams()
    const movieId = Number(params.id)

    const getAllInfo = useCallback(async () => {
        try {
            const allData = await getMovieById(movieId)
            const imagesData = await getImagesById(movieId);

            setMovieData(allData)
            setImages(imagesData)
            console.log(allData);

            setImgFon(allData.backdrop_path)
        } catch (e) {
            console.log(e);
        }
    }, [])

    const createLangs = () => {
        // console.log(movieData.spoken_languages);
        let string: string = '';
        movieData.spoken_languages?.map((item) => {
            string = string.concat(`${item.english_name}, `)
        })
        return string.substring(0, string.length - 2)
    }

    useEffect(() => {
        getAllInfo()
    }, [movieId])

    useEffect(() => {
        return () => {
            setImgFon('')
        }
    }, [])

    return (
        <div className="SelfMovie">
            <div className="aboutMovie">
                <div
                    className="movieCover"
                    style={(movieData.poster_path
                        ? { backgroundImage: `url('http://image.tmdb.org/t/p/w500${movieData.poster_path}')` }
                        : { backgroundImage: `url('https://i.imgur.com/yZ0GNkQ.png')` }
                    )}
                ></div>
                <div className="infoMovie">
                    <div className="infoTop">
                        <div className="titleAndRating">
                            <h1>{movieData.title}</h1>
                            <div className="rating">{movieData.vote_average} </div>
                        </div>
                        <span className="tagline">{movieData.tagline} </span>
                        {/* <div className="productCompany">
                            <span>Companies: </span>
                            {movieData.production_companies?.some((item) => item.logo_path) ? 
                            <>
                               {movieData.production_companies
                               .filter((company) => company.logo_path)
                               .map((comp) => <div className="company" key={comp.id}>
                                    
                               </div> )} 
                            </> : '' 
                        }
                        </div> */}
                        <span className="aboutText">{movieData.overview}</span>
                        <div className="langs">
                            <div className="title">Spoken Languages:</div> <span className="list">{createLangs()}</span>
                        </div>
                        <div className="genres">
                            <div className="title">Genres:</div>
                            <div className="list">
                                {movieData.genres?.length ? movieData.genres?.map((genre) => <div>{genre.name}</div>)
                                    : 'Not known'}
                            </div>
                        </div>
                        <button>{<MdBookmarkAdd />} Add to watchlist</button>
                    </div>
                    <div className="infoBottom">
                        <div className="info">
                            <div className="icon">
                                <AiOutlineFieldTime />
                            </div>
                            <span>Release date: {movieData.release_date ? movieData.release_date : 'Not known'}</span>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <RiMovie2Line />
                            </div>
                            <span>Ruining time: {movieData.runtime ? `${movieData.runtime} min` : 'Not known'}</span>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <AiOutlineDollar />
                            </div>
                            <span>Budget: {movieData.budget ? `${movieData.budget}$` : 'Not known'}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelfMovie;