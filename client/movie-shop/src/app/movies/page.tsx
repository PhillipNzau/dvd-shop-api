"use client";

import Link from "next/link";

async function getMovies() {
  const res = await fetch("http://127.0.0.1:3000/movies");
  const data = await res.json();
  return data as any[];
}

export default async function MoviesPage() {
  const movies = await getMovies();
  return (
    <div className=" ">
      <h1>Movies</h1>
      <div className="flex gap-5">
        {movies?.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
function Movie({ movie }: any) {
  const { id, title, year, length, description, poster_url, category } =
    movie || {};

  return (
    <Link href={`/movies/${id}`}>
      <div className="bg-red-300 rounded-xl gap-5" onClick={() => {}}>
        <h1>{title}</h1>
        <h1>{year}</h1>
        <h1>{length}</h1>
      </div>
    </Link>
  );
}
