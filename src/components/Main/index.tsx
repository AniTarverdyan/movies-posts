import { Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./style";

const Main: FC = ({ movies, setMovies, filterValue }: any) => {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const post = useLocation();

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&s=America&page=${page}`)
            .then(res => res.json())
            .then(result => setMovies(result?.Search))
    }, [page]);

    const addPage = () => {
        setPage(page + 1)
    };

    const a = () => {
        window.open(`/movies/post`)
    };

    const goToPostsPage = () => (): void => {
        a()
    };

    return (
        <Styled.Main>
            <Styled.Content>
                {movies.filter((movie: any) => movie.Title.includes(filterValue))
                    .map((movie: any, index: number) => {
                        return <Styled.Movies key={Math.random()}>
                            <Styled.Title onClick={goToPostsPage()} >
                                {movie.Title}
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
        </Styled.Main>
    )
}
export default Main;