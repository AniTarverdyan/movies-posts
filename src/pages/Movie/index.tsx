import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Style } from "./style";

const Movie: FC = ({ movies }: any) => {
    const { title } = useParams();

    
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&t=${title}`)
            .then(res => res.json())
            .then(result => console.log(result))
    },[]);
    console.log(title)
    return (
        <div>
            {movies.filter((movie: any) => movie.imdbID === 'tt1843866')
                .map((item: any) => {
                    return <Style.MovieContent>
                        <Style.Title>
                            {item.Title}
                        </Style.Title>
                        <Style.Poster src={item.Poster} />
                    </Style.MovieContent>
                })}
        </div>
    )
}
export default Movie;