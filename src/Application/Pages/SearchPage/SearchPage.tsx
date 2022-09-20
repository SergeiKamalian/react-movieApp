import { FC, useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMoviesByName } from '../../../Api/Api'
import { IPopular, ISearchPageProps } from '../../../module'
import MovieItem from '../Pages/Page/MovieItem'

const SearchPage: FC<ISearchPageProps> = ({ }) => {
    const [searchData, setSearchData] = useState<IPopular[]>([])
    const params = useParams()
    const searchValue = params?.value!;

    const getSearchData = useCallback(async () => {
        try {
            const data = await getMoviesByName(searchValue)
            setSearchData(data)
        } catch (e) {
            console.log(e);
        }
    }, [params.value])


    const genres = JSON.parse(localStorage.getItem('genres')!)

    useEffect(() => {
        getSearchData()
    }, [searchValue])

    return (
        <div className="SearchPage">
            <h1>SEARCH BY REQUEST: <span>{params.value?.toUpperCase()}</span></h1>
            <div className="searchPageList">
                {searchData.length 
                ? searchData.map((searchItem) => <MovieItem movie={searchItem} genres={genres} />) 
                : <span>Sorry, we didn't find anything matching your search!</span>
                }
            </div>
        </div>
    )
}

export default SearchPage