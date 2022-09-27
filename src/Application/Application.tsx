import Navigation from "./Components/Navigation/Navigation";
import Pages from "./Pages/Pages";
import { useEffect, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { getGenresList } from "../Api/Api";
import SelfMovie from "./Pages/Pages/SelfMovie/SelfMovie";
const Applicaton = ({setImgFon,}: {setImgFon: React.Dispatch<React.SetStateAction<string>>;}) => {
  const navigate = useNavigate();

//   useEffect(() => {
//     navigate("popular");
//   }, [navigate]);
  const getGenres = useCallback(async () => {
    try {
      const genresList = await getGenresList();
      localStorage.setItem("genres", JSON.stringify(genresList));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="Application">
      <Navigation />
      <Pages />
      <Routes>
        <Route path="search/:value" element={<SearchPage />} />
        <Route
          path="movies/:id"
          element={<SelfMovie setImgFon={setImgFon} />}
        />
      </Routes>
    </div>
  );
};

export default Applicaton;
