import { useCallback, useEffect } from "react";
import { getMovies } from "../../../../Api/Api";
import { IGenres } from "../../../../model";
import MovieItem from "./MovieItem";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../Components/Loader/Loader";
import { RootState } from "../../../../redux/store";
import { setMoviesByName } from "../../../../redux/features/actions";
import { useNavigate, useParams } from "react-router-dom";

const Page = () => {
  const localeGenres: string = localStorage.getItem("genres")!;
  const genres: IGenres[] = JSON.parse(localeGenres);
  const { movies } = useSelector((state: RootState) => state.searchPageRouter);
  const { menuNavigateItems } = useSelector((state: RootState) => state.searchPageRouter)
  const { activeLink } = useSelector((state: RootState) => state.searchPageRouter)

  const params = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const newdata = await getMovies(activeLink ? activeLink: params?.value!);
      {newdata ? dispatch(setMoviesByName(newdata)) : navigate('/')}
    } catch (e) {
      console.log(e);
    }
  }, [activeLink, dispatch]);

  useEffect(() => {
    getData();
    return () => { dispatch(setMoviesByName([])) }
  }, [getData, dispatch]);
  return (
    <div className="thisPage">
      <div className="Page">
        <h1>{menuNavigateItems.find((item) => item.value === params?.value!)?.title}:</h1>
        {!movies.length ? (
          <Loader />
        ) : (
          <div className="pageContent">
            {movies.map((movie) => (
              <MovieItem movie={movie} key={movie.id} genres={genres} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
