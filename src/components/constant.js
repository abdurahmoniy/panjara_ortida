import FilmInfo from "./pages/FilmInfo";
import Home from "./pages/Home";
import Series from "./pages/Series";

export const navLink = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        element: <Home/>
    },
    {
        id: 2,
        title: 'About Film',
        path: '/info',
        element: <FilmInfo/>
    },
    {
        id: 3,
        title: 'All series',
        path: '/series',
        element: <Series/>
    },
]