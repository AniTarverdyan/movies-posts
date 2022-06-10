import { FC, useEffect, useState } from "react";
import { Styled } from "./style";

const Main: FC = () => {
const [ movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=2d49a8ef&s=comedy')
        .then(res => res.json())

        .then(result => setMovies(result?.Search))
    })
    return (
       <Styled.Main> 
            <Styled.Input />


            {movies.map<any>((movie) => {
                return <Styled.Movies>
                    <Styled.Title>
                    {movie.Title}
                </Styled.Title>
                <Styled.Image src={movie.Poster} />
                    <Styled.Year>
                    {movie.Year}
                    {'test'}
                    </Styled.Year>
                    </Styled.Movies>
            }) }
       </Styled.Main>
           
        
    )
}
export default Main;