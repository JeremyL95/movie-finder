import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

const movieList = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
        imdbID: "tt0133093",
        Title: "The Matrix",
        Year: "1999",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
        imdbID: "tt6751668",
        Title: "Parasite",
        Year: "2019",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
];

export default function MovieList() {
    const [isOpened, setIsOpened] = useState(true);
    return (
        <div className="rounded-lg bg-gray-600 w-1/4 m-3 p-5 text-white">
            <div className={`flex justify-between ${isOpened ? 'mb-5' : ''}`}>
                <h2 className="text-lg">Movie Lists</h2>
                <button className="text-right" onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? "-" : "+"}
                </button>
            </div>

            {isOpened && (<ul>
                {movieList?.map((movie) => {
                    return (
                        <Movie key={movie.imdbID} movie={movie} />
                    )
                })}
            </ul>)}
        </div>
    )
}

function Movie({ movie }) {
    return (
        <li className="flex items-center p-2">
            <img src={movie.Poster} className="w-14 mr-3 object-cover" alt="" />
            <div className="flex flex-col">
                <h3 className="font-bold">{movie.Title}</h3>
                <div className="flex items-center">
                    <CiCalendarDate size={16} />
                    <p className="text-sm ml-2">{movie.Year}</p>
                </div>
            </div>
        </li>
    )
}