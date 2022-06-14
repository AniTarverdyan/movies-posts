import { FC } from "react";
import { Style } from "./style";

const Movie: FC = ({ movies }: any) => {
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