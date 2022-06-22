import { Button, CircularProgress, Pagination, Tooltip } from "@mui/material";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovieItem } from "../../interface";
import { moviesStore } from "../../mobx/moviesStore";
import  Styled  from "./style";
import { IMainFilterValue } from "./type";

const Main: FC<IMainFilterValue> = ({ filterValue }) => {
    const navigate = useNavigate();
    const params = useParams();
    const page = params.page ? +params.page : 1

    useEffect(() => {
        moviesStore.getMovies(page);
    }, [page]);

    useEffect(() => {
        moviesStore.showSearchField = true
    }, []);

    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        navigate(`/${value}`)
    };

    const handleClick = (movie: IMovieItem) => {
        window.open(`/movies/post/${movie.Title}`);
    };

    return moviesStore.loading ? <CircularProgress /> : (
        <Styled.Main>
            <Styled.Content>
                {moviesStore.movies.filter((movie: IMovieItem) => movie.Title.includes(filterValue ? filterValue : ''))
                    .map((movie: any) => {
                        return <Styled.Movie key={Math.random()}>
                            <Styled.Title onClick={() => handleClick(movie)}>
                                <Tooltip title={movie.Title} arrow>
                                    <Button>{movie.Title.length > 30 ? movie.Title.substring(0, 30) + '...' : movie.Title}</Button>
                                </Tooltip>
                            </Styled.Title>
                            <Styled.Image src={movie.Poster} />
                            <Styled.Year>
                                {movie.Year}
                            </Styled.Year>
                        </Styled.Movie>
                    })
                }
            </Styled.Content>
            <Styled.Pages>
                <Pagination count={10} variant="outlined" color="standard" page={page} onChange={onPageChange} />
            </Styled.Pages>
        </Styled.Main>
    );
}

export default observer(Main);