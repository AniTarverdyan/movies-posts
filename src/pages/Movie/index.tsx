import { CircularProgress } from "@mui/material";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { store } from "../../mobx/store";
import { Styled } from "./style";



const Movie: FC = () => {
    const { title } = useParams();

    useEffect(() => {
        store.getMovie(title)
    }, [title]);
    return (
        store.movieLoading ? <CircularProgress /> : <>
            <Styled.Title>
                {store.movie?.Title}
            </Styled.Title>
            {<Styled.Poster src={store.movie?.Poster} />}
            <Styled.Content>
                <Styled.Item>
                    <Styled.Div>Year: </Styled.Div> <Styled.ItemContent>{store.movie?.Year}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Released: <Styled.ItemContent>{store.movie?.Released}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Runtime: <Styled.ItemContent>{store.movie?.Runtime}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Genre: <Styled.ItemContent>{store.movie?.Genre}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Writer: <Styled.ItemContent>{store.movie?.Writer}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Actors: <Styled.ItemContent>{store.movie?.Actors}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Language: <Styled.ItemContent>{store.movie?.Language}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Country: <Styled.ItemContent>{store.movie?.Country}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Awards: <Styled.ItemContent>{store.movie?.Awards}</Styled.ItemContent>
                </Styled.Item>
            </Styled.Content>
        </>
    )
}
export default observer(Movie);