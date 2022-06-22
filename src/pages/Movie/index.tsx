import { CircularProgress } from "@mui/material";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { movieStore } from "../../mobx/movieStore";
import { Styled } from "./style";


const Movie: FC = () => {
    const { title } = useParams();

    useEffect(() => {
        movieStore.getMovie(title)
    }, [title]);
    return (
        movieStore.loading ? <CircularProgress /> : <>
            <Styled.Title>
                {movieStore.movie?.Title}
            </Styled.Title>
            {<Styled.Poster src={movieStore.movie?.Poster} />}
            <Styled.Content>
                <Styled.Item>
                    <Styled.Div>Year: </Styled.Div> <Styled.ItemContent>{movieStore.movie?.Year}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Released: <Styled.ItemContent>{movieStore.movie?.Released}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Runtime: <Styled.ItemContent>{movieStore.movie?.Runtime}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Genre: <Styled.ItemContent>{movieStore.movie?.Genre}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Writer: <Styled.ItemContent>{movieStore.movie?.Writer}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Actors: <Styled.ItemContent>{movieStore.movie?.Actors}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Language: <Styled.ItemContent>{movieStore.movie?.Language}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Country: <Styled.ItemContent>{movieStore.movie?.Country}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Awards: <Styled.ItemContent>{movieStore.movie?.Awards}</Styled.ItemContent>
                </Styled.Item>
            </Styled.Content>
        </>
    )
}
export default observer(Movie);