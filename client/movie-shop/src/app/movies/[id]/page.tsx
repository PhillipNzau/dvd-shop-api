async function getMovie(movieId: string) {
  const res = await fetch(`http://127.0.0.1:3000/movies/${movieId}`, {
    next: { revalidate: 10 },
  });

  const data = await res.json();
  return data;
}

export default async function MoviePage({ params }: any) {
  const movie = await getMovie(params.id);
  return (
    <div>
      <h1>Selected Movie</h1>
      {movie.title}
    </div>
  );
}
