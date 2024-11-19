import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList.jsx";
import WatchedList from "./components/WatchedList.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex">
        <MovieList />
        <WatchedList />
      </main>
    </>
  )
}

