import { IMenuNavigateItems, IPopular } from "../../../model";
import { ISearchPageReducer } from "../../../model";
import { SEARCH_DATA } from "./searchPageTypes";

const menuNavigateItems: IMenuNavigateItems[] = [
  { title: "POPULAR MOVIES", value: "popular", active: false },
  { title: "NOW PLAYING", value: "now_playing", active: false },
  { title: "TOP RATED", value: "top_rated", active: false },
  { title: "UPCOMING MOVIES", value: "upcoming", active: false },
];

const INITIAL_STATE: ISearchPageReducer = {
  movies: [],
  menuNavigateItems,
};

const searchPageRouter = (
  state = INITIAL_STATE,
  action: { type: string; payload: number | IPopular[] }
): ISearchPageReducer => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        movies: action.payload as IPopular[],
      };
    default:
      return state;
  }
};
export default searchPageRouter;
