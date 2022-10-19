import {Route, Routes } from 'react-router-dom';
import MoviesList from "./Movies";
import Movie from "./Movie";

function App() {

    return (
        <Routes>
             <Route index path="/" element={<MoviesList />}/>
             <Route path="/:id" element={<Movie />}/>
        </Routes>
    )
}

export default App;
