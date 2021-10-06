// first step: make a fetch request to  my baseURL and display items on the DOM 😁
// second step: add adding description, rating, length, image, and where to watch it *** need to figure out how to get the image to show up and hyperlink for watch
// third step: make it to where users can add a movie sucessfully! add an eventlistener, etc 😁 work on backend #need to bring category in
// fourth step: get renderMovie(json.data) working so users don't have to refresh to see the change
// fifth step: get the delete button working by adding an event listener, submit a fetch request to delete, then remove from DOM
// sixth step: get the update button working! - Need to save it into the database and turn the input back into a span
// seventh step: convert to OOS by making classes and organizing things for my movies 😎
// eighth step: formatting, checking to see how to make my code better -- DO NOT BREAK IT

// really helpful for when my project gets bigger, it runs off the port also helps not typing in the url each time 
// I could wrap all of this into an object as well
// defining what I need and what will be grabbed throughout the app 
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
  // always add a prevent default when handling a submit so that it waits for the user to click 
  event.preventDefault()
  // my movie api/adapter is where my movieCreation function is -I am creating a movie from the properties from movieCreation
  movieAdapter.movieCreation()
  // clear and resets the text field
  event.target.reset()
}

// calling on my movie adapter to get the movies that are pre created and the categories that have been already  - each time the user goes to Boogle
movieAdapter.getMovies()
categoryAdapter.getCategories() // my dropdown of the categories 