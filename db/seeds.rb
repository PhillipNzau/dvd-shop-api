# db/seeds.rb

# Clear existing data
Movie.destroy_all

# Seed data
movies = [
  {
    title: "Movie Title 1",
    year: 2020,
    length: 120,
    description: "A great movie.",
    poster_url: "https://example.com/poster1.jpg",
    category: "Action",
    discount: false,
    female_director: true
  },
  {
    title: "Movie Title 2",
    year: 2018,
    length: 105,
    description: "An exciting film.",
    poster_url: "https://example.com/poster2.jpg",
    category: "Adventure",
    discount: true,
    female_director: false
  },
  # Add more movie entries as needed
]

movies.each do |movie_attributes|
  Movie.create!(movie_attributes)
end
