import { IMenuNavigateItems, IPopular } from "../../../model";
import { ISearchPageReducer } from "../../../model";
import { SEARCH_DATA, SET_LINK } from "./searchPageTypes";

const menuNavigateItems: IMenuNavigateItems[] = [
  { title: "POPULAR MOVIES", value: "popular", active: false },
  { title: "NOW PLAYING", value: "now_playing", active: false },
  { title: "TOP RATED", value: "top_rated", active: false },
  { title: "UPCOMING MOVIES", value: "upcoming", active: false },
];

const INITIAL_STATE: ISearchPageReducer = {
  movies: [],
  menuNavigateItems,
  activeLink: ''
};

const searchPageRouter = (
  state = INITIAL_STATE,
  action: { type: string; payload: IPopular[] | string }
): ISearchPageReducer => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        movies: action.payload as IPopular[],
      };
    case SET_LINK:
      return {
        ...state,
        activeLink: action.payload as string,
      };
    default:
      return state;
  }
};
export default searchPageRouter;
