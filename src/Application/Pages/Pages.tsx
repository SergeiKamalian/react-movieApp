import { useEffect, useCallback, useState, FC } from "react"
import { IMenuItem, IPagesProps } from "../../module"
import Page from "./Pages/Page/Page"
import { Routes, Route, NavLink } from "react-router-dom";
import { getGenres } from "../../Functions/Functions";

const Pages: FC<IPagesProps> = ({ setLoader }) => {
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([
        { title: 'Pupular movies', value: 'popular', active: false },
        { title: 'Now playing', value: 'now_playing', active: false },
        { title: 'Top rated', value: 'top_rated', active: false },
        { title: 'Upcoming movies', value: 'upcoming', active: false }
    ])

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <div className="Pages">
            <div className="menu">
                <ul>
                    {menuItems.map((menuItem) => <NavLink
                        to={`/${menuItem.value}`}
                        key={menuItem.value + 'navlink'}
                        className={(menuItem.active ? 'link active' : 'link')}
                    >
                        {menuItem.title}
                    </NavLink>)}
                </ul>
            </div>

            <Routes>
                {menuItems.map((menuItem) => <Route path={`/${menuItem.value}`} element={<Page setLoader={setLoader} active={menuItem} activeLink={menuItem.value} key={menuItem.value} />} />)}
            </Routes>
        </div>
    )
}

export default Pages