import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

import UserRating from "./UserRating.jsx";

const watchedList = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

export default function WatchedList() {
    const [isOpened, setIsOpened] = useState(true);
    const [watched, setWatched] = useState(watchedList);

    return (
        <div className="rounded-lg bg-gray-600 w-3/4 h-screen m-3 p-5 text-white">
            <div className={`flex flex-col ${isOpened ? 'mb-5' : ''}`}>
                <div className="flex justify-between">
                    <h2 className="text-lg capitalize">Movies you watched</h2>
                    <button className="text-right" onClick={() => setIsOpened(!isOpened)}>
                        {isOpened ? "-" : "+"}
                    </button>
                </div>

                <WatchedSummary watched={watched} />
            </div>

            {isOpened && <WatchedListing />}

            <UserRating maxRating={10} />
        </div>
    )
}

function average(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue / arr.length, 0);
}

function WatchedSummary({ watched }) {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
    const avgUserRating = average(watched.map((movie) => movie.userRating))
    const avgRunTime = average(watched.map((movie) => movie.runtime))

    return (
        <div>
            <div className="flex items-center justify-between">
                <span>{watched.length} {watched.length > 1 ? "movies" : "movie"}</span>

                <span>{avgImdbRating}</span>

                <span>{avgUserRating}</span>

                <span>{avgRunTime}</span>
            </div>
        </div>
    )
}

function WatchedListing() {
    {
        return (<ul>
            {watchedList?.map((movie) => {
                return (
                    <li key={movie.imdbID} className="flex items-center p-2">
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
            })}
        </ul>)
    }
}