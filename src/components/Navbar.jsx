import SearchBar from "./SearchBar.jsx";
import { useState } from "react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-5 text-white bg-gray-600">
            <Logo />
            <SearchBar />
            <ResultFoundText />
        </nav>
    )
}

function Logo() {
    return (
        <div className="flex items-center">
            <span className="mr-2">Logo</span>
            <h1>Movie Finder</h1>
        </div>
    )
}



function ResultFoundText() {
    const [isMobile, setIsMobile] = useState(true);

    return (
        <>
            {isMobile && <p> Found <strong>X</strong> results</p>}
        </>
    )
}