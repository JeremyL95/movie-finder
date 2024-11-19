import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState([]);

    return (
        <>
            <input
                type="text"
                className="w-full max-w-[500px] border-0 transparent p-2 rounded-md focus:outline-none text-black"
                placeholder="Search Movie..."
                value={query}
                onChange={(evt) => setQuery(evt.target.value)} />
        </>
    )
}