import Navigation from "./Components/Navigation/Navigation"
import Pages from "./Pages/Pages"
import { useState, useEffect, useCallback } from "react"
import { IPopular } from "../module"
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { getGenresList } from "../Api/Api";
import SelfMovie from "./Pages/Pages/SelfMovie/SelfMovie";
const Applicaton = ({ setImgFon }: { setImgFon: React.Dispatch<React.SetStateAction<string>> }) => {
    const [loader, setLoader] = useState(false)
    const [searchValue, setSearchValue] = useState<IPopular[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        navigate('popular')
    }, [])
    const getGenres = useCallback(async () => {
        try {
            const genresList = await getGenresList()
            localStorage.setItem('genres', JSON.stringify(genresList))
            console.log(localStorage);

        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="Application">

            <Navigation setSearchValue={setSearchValue} />
            <Pages setLoader={setLoader} />
            <Routes>
                <Route path="search/:value" element={<SearchPage searchData={searchValue} />} />
                <Route path="movies/:id" element={<SelfMovie setImgFon={setImgFon} />} />
            </Routes>

        </div>
    )
}

export default Applicaton