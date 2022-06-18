import { Button, Pagination, Tooltip } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TimerView } from "../Timer";
import { Styled } from "./style";

export interface IMainProps {
    movies: [{
        Title: string,
        Year: string
    }];
    setMovies: (movies: []) => void;
    filterValue: string;
};

interface IMovie {
    movie: {
        Title: string
    }
}


const Main: FC<IMainProps> = ({ movies, setMovies, filterValue }: IMainProps) => {
    const [page, setPage] = useState(1)
    const { a } = useParams();
    console.log(a)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&s=America&page=${page}&t=series`)
            .then(res => res.json())
            .then(result => setMovies(result?.Search))

    }, [page + 1]);

    const addPage = () => {
        setPage(page + 1)
    };


    const handleClick = (movie: IMovie) => {
        window.open(`/movies/post/${movie.Title}`);

    };

    return (
        <Styled.Main>
            <Styled.Content>
                {movies.filter((movie: IMovie) => movie.Title.includes<IMovie>(filterValue))
                    .map((movie: any) => {
                        return <Styled.Movies key={Math.random()}>
                            <Styled.Title onClick={() => handleClick(movie)}>
                                <Tooltip title={movie.Title} arrow>
                                    <Button>{movie.Title.length > 30 ? movie.Title.substring(0, 30) + '...' : movie.Title}</Button>
                                </Tooltip>
                            </Styled.Title>
                            <Styled.Image src={movie.Poster} />
                            <Styled.Year>
                                {movie.Year}
                            </Styled.Year>
                        </Styled.Movies>
                    })
                }
            </Styled.Content>
            <Styled.Pages>
                <NavLink to={`/${page}`}>
                    <Pagination count={10} variant="outlined" color="standard" onClick={addPage} />
                </NavLink>
            </Styled.Pages>
            <TimerView />
        </Styled.Main>
    )
}
export default Main;