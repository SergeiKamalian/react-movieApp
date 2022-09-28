import { IPopular } from "../../model";
import { SEARCH_DATA, SET_LINK } from "./searchPage/searchPageTypes";

export const setMoviesByName = (data: IPopular[] | null) => ({
	type: SEARCH_DATA,
	payload: data
})

export const setActiveLinkFnc = (link: string) => ({
	type: SET_LINK,
	payload: link
})