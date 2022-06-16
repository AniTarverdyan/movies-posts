import { Button, Pagination, Tooltip } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TimerView } from "../Timer";
import { Styled } from "./style";

const Main: FC = ({ movies, setMovies, filterValue }: any) => {
    const [page, setPage] = useState(1);
    const { a } = useParams();

    console.log(a);
    
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&s=America&page=${page}`)
            .then(res => res.json())
            .then(result => setMovies(result?.Search))
    }, [page]);

    const addPage = () => {
        setPage(page + 1)
    };

    const handleClick = (movie: string) => {
        window.open(`/movies/post/${movie.Title}`);
    };

    return (
        <Styled.Main>
            <Styled.Content>
                {movies.filter((movie: any) => movie.Title.includes(filterValue))
                    .map((movie: any) => {
                        return <Styled.Movies key={Math.random()}>
                            <Styled.Title onClick={() => handleClick(movie)}>
                                <Tooltip title={movie.Title} arrow>
                                    <Button>{movie.Title.length > 40 ? movie.Title.substring(0, 40) + '...' : movie.Title}</Button>
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
                <Pagination count={10} variant="outlined" color="standard" onClick={addPage} />
            </Styled.Pages>
            <TimerView />
        </Styled.Main>
    )
}
export default Main;