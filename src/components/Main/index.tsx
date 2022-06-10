import { FC, useEffect, useState } from "react";
import { Styled } from "./style";

const Main: FC = () => {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=2d49a8ef&s=comedy')
            .then(res => res.json())

            .then(result => setMovies(result?.Search))
    });


    const changeInputvalue = (e) => {
        setInputValue(e.target.value)
    };

    const filterMovies = () => {

        setFilterValue(inputValue)
    };

    return (
        <Styled.Main>
            <Styled.Input>
                <input onChange={changeInputvalue} value={inputValue} />
                <button onClick={filterMovies}>Search</button>
            </Styled.Input>
            <Styled.Content>
                {movies.filter((movie) => movie.Title.includes(filterValue))
                .map<any>((movie) => {
                    return <Styled.Movies>
                        <Styled.Title>
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

        </Styled.Main>


    )
}
export default Main;