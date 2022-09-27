import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../../../../Api/Api";
import { IGenres, IPageProps, IPopular } from "../../../../model";
import MovieItem from "./MovieItem";
import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";
import Loader from "../../../Components/Loader/Loader";
import { RootState } from "../../../../redux/store";
import { setMoviesByName } from "../../../../redux/features/actions";

const Page: FC<IPageProps> = ({ active, activeLink }) => {
  const localeGenres: string = localStorage.getItem("genres")!;
  const genres: IGenres[] = JSON.parse(localeGenres);
  const { movies } = useSelector((state: RootState) => state.searchPageRouter);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const newdata = await getMovies(activeLink);
      dispatch(setMoviesByName(newdata));
    } catch (e) {
      console.log(e);
    }
  }, [activeLink, dispatch]);

  useEffect(() => {
    getData();
    return () => {dispatch(setMoviesByName([]))}
  }, [getData, dispatch]);
  return (
    <div className="thisPage">
      <div className="Page">
        <h1>test</h1>
        <h1>{active.title}:</h1>
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
