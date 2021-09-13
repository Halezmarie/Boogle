// first step: make a fetch request to  my baseURL and display items on the DOM 😁
// second step: add adding description, rating, length, image, and where to watch it *** need to figure out how to get the image to show up and hyperlink for watch
// third step: make it to where users can add a movie sucessfully! add an eventlistener, etc 😁

const movieslist = document.getElementById('movies')
const form = document.getElementById('movie-form')
const titleInput = document.getElementById('movie-title')
const yearInput = document.getElementById('movie-year')
const ratingInput = document.getElementById('movie-rating')
const lengthInput = document.getElementById('movie-length')
const imageInput = document.getElementById('movie-image')
const descriptionInput = document.getElementById('movie-description')
const watchInput = document.getElementById('movie-watch')

form.addEventListener('submit', handleSubmit)

function handleSubmit(){


}

function getMovies(){
  fetch('http://localhost:3000/api/v1/movies')
// always after a fetch request we must handle our response with a .then. We need to convert it so that it is readable and usable! That is why we parse the JSON. string value > data we can use
    .then(res => res.json())
    // => can be written as a function, either way is fine! it is just faster with =>
    // magic
    .then(renderMovies)
    // ^ this does not need () because I want to call it later on. I am just listing the definition for now
}


 // iterate over the array and for each movie I call a different function, when I finish filling out the form we will get data back that we can feed back into our renderMovies function
function renderMovies(rando){
  const movies = rando["data"]
    movies.forEach(element => {
        renderMovie(element)
    })
}

function renderMovie(movie){
  // this function is automatically going to receive the info from the .then(rendermovies)
   // const li is a const because even though it will be changing for each iteration through our elements, every iteration is actually its OWN scope. const are its own block scope so it is its own li that exists while it makes the li and then the NEXT li it works on it will start all over again brand new -- LIKE A FACTORY!
    const li = document.createElement('li')
    li.innerHTML = `
        <div data-id="${movie.id}">
            <strong class="title">${movie.attributes.title}</strong>
            <br>
            <span class="rating">${movie.attributes.rating}</span>,
            <span class="length">${movie.attributes.length}</span>
            <br>
            <span class="length">${movie.attributes.description}</span>
        </div>
    `
    movieslist.appendChild(li)
}

getMovies()