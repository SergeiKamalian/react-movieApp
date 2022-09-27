import { IPopular } from "../../model";
import { SEARCH_DATA } from "./searchPage/searchPageTypes";

export const setMoviesByName = (data: IPopular[] | null) => ({
	type: SEARCH_DATA,
	payload: data
})