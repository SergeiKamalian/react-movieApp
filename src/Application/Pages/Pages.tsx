import { useEffect } from "react";
import Page from "./Pages/Page/Page";
import { Routes, Route, NavLink } from "react-router-dom";
import { getGenres } from "../../Functions/Functions";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { setActiveLinkFnc } from "../../redux/features/actions";


const Pages = () => {
  const dispatch = useDispatch()
  const { menuNavigateItems } = useSelector(
    (state: RootState) => state.searchPageRouter
  );

  const setActiveLink = (link: string) => {
    dispatch(setActiveLinkFnc(link))
  }

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className="Pages">
      <div className="menu">
        <ul>
          {menuNavigateItems.map((menuItem) => (
            <NavLink
              to={`/${menuItem.value}`}
              key={menuItem.value + "navlink"}
              className={menuItem.active ? "link active" : "link"}
              onClick={() => setActiveLink(menuItem.value)}
            >
              {menuItem.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pages;
