import { useEffect } from "react";
import Page from "./Pages/Page/Page";
import { Routes, Route, NavLink } from "react-router-dom";
import { getGenres } from "../../Functions/Functions";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux/es/exports";

const Pages = () => {
  const { menuNavigateItems } = useSelector(
    (state: RootState) => state.searchPageRouter
  );
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
            >
              {menuItem.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <Routes>
        {menuNavigateItems.map((menuItem) => (
          <Route
            path={`/${menuItem.value}`}
            key={menuItem.value}
            element={
              <Page 
                active={menuItem}
                activeLink={menuItem.value}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default Pages;
