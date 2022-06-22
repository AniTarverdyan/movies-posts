import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Movie from "../pages/Movie";
import routes from "./publicRoutes"

interface IFilterValue {
    filterValue: string
};

const Routing: FC<IFilterValue> = ({ filterValue }) => {
    return <Routes>
        <Route path='/' element={<Main filterValue={filterValue} />} />
        <Route path='/:page' element={<Main filterValue={filterValue} />} />
        <Route path='/movies/post/:title' element={<Movie />} />
    </Routes>
};

// const Routing = () => {
//     return (
//         <>
//             {routes.map(route =>
//                 (<Route key={route.path} path={route.path} component={route.component} />)
//             )}
//             <Route exact path='/' redirect={() => <Redirect to='/:page' />} />
//         </>
//     )
// }
export default Routing;