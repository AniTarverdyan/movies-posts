import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Movie from "../pages/Movie";

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
export default Routing;