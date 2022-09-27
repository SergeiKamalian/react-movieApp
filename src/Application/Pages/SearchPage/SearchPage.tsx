import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByName } from "../../../Api/Api";
import { IPopular } from "../../../model";
import MovieItem from "../Pages/Page/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";
import { setMoviesByName } from "../../../redux/features/actions";
import { RootState } from "../../../redux/store";

const SearchPage = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state: RootState) => state.searchPageRouter);
    useEffect(() => {
        console.log(movies);
    }, [movies])

  const params = useParams();
  const searchValue = params?.value!;

  const getSearchData = useCallback(async () => {
    try {
      const data = await getMoviesByName(searchValue);
      dispatch(setMoviesByName(data));
    } catch (e) {
      console.log(e);
    }
  }, [searchValue, dispatch]);

  const genres = JSON.parse(localStorage.getItem("genres")!);

  useEffect(() => {
    getSearchData();
  }, [getSearchData]);

  return (
    <div className="SearchPage">
      <h1>
        SEARCH BY REQUEST: <span>{params.value?.toUpperCase()}</span>
      </h1>
      <div className="searchPageList">
        {movies.length ? (
          movies.map((searchItem) => (
            <MovieItem movie={searchItem} genres={genres} key={searchItem.id} />
          ))
        ) : (
          <span>Sorry, we didn't find anything matching your search!</span>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
