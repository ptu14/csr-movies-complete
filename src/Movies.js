import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const movies = await fetch(`https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies`)
                .then((response) => response.json());
            setMovies(movies.movies)
        }
        fetchData();
    }, []);

    return (
        <main className="movies-list">
            <h1>Movies list</h1>
            <ul className="movies-list__list">
                {movies.map(movie =>
                    <li className="card" key={movie.id}>
                        <img loading="lazy" src={movie.img} alt={movie.title}/>
                        <div className="card__info">
                            <Link to={movie.id}>{movie.title}</Link> <span>{movie.year}</span>
                            <p>Rating: ★{movie.rating}</p>
                        </div>
                    </li>
                )}
            </ul>
        </main>
    );
}
