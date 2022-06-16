import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Styled } from "./style";

interface DataItems {
    Title: string;
    Poster: string;
    Year: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Writer: string;
    Actors: string;
    Language: string;
    Country: string;
    Awards: string
}

const Movie: FC = () => {
    const { title } = useParams();
    const [data, setData] = useState<DataItems>({});

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&t=${title}`)
            .then(res => res.json())
            .then(result => setData(result))
    }, []);

    return (
        <>
            <Styled.Title>
                {data.Title}
            </Styled.Title>
            {<Styled.Poster src={data.Poster} />}
            <Styled.Content>
                <Styled.Item>
                    <Styled.Div>Year: </Styled.Div> <Styled.ItemContent>{data.Year}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Released: <Styled.ItemContent>{data.Released}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Runtime: <Styled.ItemContent>{data.Runtime}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Genre: <Styled.ItemContent>{data.Genre}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Writer: <Styled.ItemContent>{data.Writer}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Actors: <Styled.ItemContent>{data.Actors}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Language: <Styled.ItemContent>{data.Language}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Country: <Styled.ItemContent>{data.Country}</Styled.ItemContent>
                </Styled.Item>
                <Styled.Item>
                    Awards: <Styled.ItemContent>{data.Awards}</Styled.ItemContent>
                </Styled.Item>
            </Styled.Content>
        </>
    )
}
export default Movie;