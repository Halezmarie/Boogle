// first step: make a fetch request to  my baseURL and display items on the DOM 😁
// second step: add adding description, rating, length, image, and where to watch it
// third step: make it to where users can add a movie sucessfully! add an eventlistener, etc 😁 work on backend #need to bring category in
// fourth step: get renderMovie(json.data) working so users don't have to refresh to see the change
// fifth step: get the delete button working by adding an event listener, submit a fetch request to delete, then remove from DOM
// sixth step: get the update button working! - Need to save it into the database and turn the input back into a span
// seventh step: convert to OOS by making classes and organizing things for my movies 😎
// eighth step: formatting, checking to see how to make my code better added watch button, and slightly better css styling-- DO NOT BREAK IT

const port = "http://localhost:3000/api/v1"
const movieAdapter = new MovieAdapter(port)
const categoryAdapter = new CategoryAdapter(port)
const movieslist = document.getElementById('movies')
const form = document.getElementById('movie-form')
const titleInput = document.getElementById('movie-title')
const yearInput = document.getElementById('movie-year')
const ratingInput = document.getElementById('movie-rating')
const lengthInput = document.getElementById('movie-length')
const descriptionInput = document.getElementById('movie-description')
const watchInput = document.getElementById('movie-watch')
const dropdown = document.getElementById('category-dropdown')


form.addEventListener('submit', handleSubmit) 
function handleSubmit(event){
  event.preventDefault()
  movieAdapter.movieCreation()
  event.target.reset()
}

movieAdapter.getMovies()
categoryAdapter.getCategories() 