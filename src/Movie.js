import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


export default function Movie()  {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const movies = await fetch(`https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies/${id}`)
                .then((response) => response.json());
            setMovie(movies[0])
        }
        fetchData();
    }, [id]);
    return (<main className="movie">
        <section className="movie__title">
            <h1>{movie.title}</h1>
        </section>
        <section className="movie__about">
            <img className="movie_image" src={movie.img} alt=""/>
                <div className="movie_description">
                    <header>
                        <h1>{movie.title}</h1>
                        <p>{movie.year}</p>
                    </header>
                    <p>Rate: {movie.rating}</p>
                    <p>{movie.description}</p>
                </div>
        </section>
    </main>)
}
