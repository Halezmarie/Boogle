// first step: make a fetch request to  my baseURL and display items on the DOM 😁
// second step: add adding description, rating, length, image, and where to watch it *** need to figure out how to get the image to show up and hyperlink for watch
// third step: make it to where users can add a movie sucessfully! add an eventlistener, etc 😁 work on backend #need to bring category in
// fourth step: get renderMovie(json.data) working so users don't have to refresh to see the change
// fifth step: get the delete button working by adding an event listener, submit a fetch request to delete, then remove from DOM



const movieslist = document.getElementById('movies')
const form = document.getElementById('movie-form')
const titleInput = document.getElementById('movie-title')
const yearInput = document.getElementById('movie-year')
const ratingInput = document.getElementById('movie-rating')
const lengthInput = document.getElementById('movie-length')
// const imageInput = document.getElementById('movie-image')
const descriptionInput = document.getElementById('movie-description')
const watchInput = document.getElementById('movie-watch')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  // always add a prevent default when handling a submit so that it waits for the user to click 
  event.preventDefault()

  // make our params hash!
  const movieDetails = {
    title: titleInput.value,
    year: yearInput.value,
    rating: ratingInput.value,
    length: lengthInput.value,
    // image: imageInput.value,
    description: descriptionInput.value,
    watch: watchInput.value
  }
  // sending the fetch request to 
  const configObj = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    // send in the meat of what our backend needs in a format that is safe to send across the internet and is correct
    body: JSON.stringify(movieDetails)
  }
  // to baseURL it will take in the extra information coming through, this is also pessimistic rendering where it will only display IF the fetch request goes through
  fetch("http://localhost:3000/api/v1/movies", configObj)
    .then(res => res.json())
    .then(json => renderMovie(json.data)) // not having to refresh each time
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
    li.dataset["id"] = movie.id
    li.id = `movieid-${movie.id}` // gives what movie it is when I inspect it on the page to help organize it 
    li.innerHTML = `
        <div data-id="${movie.id}">
            <strong class="title">${movie.attributes.title}</strong>
            <br>
            <span class="year">${movie.attributes.year}</span>,
            <span class="rating">${movie.attributes.rating}</span>,
            <span class="length">${movie.attributes.length}</span>
            <br>
            <span class="length">${movie.attributes.description}</span>
            <br>
            Watch it: <span class="length">${movie.attributes.watch}</span>
        </div>
        <button class="edit" data-id="${movie.id}"> Edit Movie </button>
        <button class="delete" data-id="${movie.id}"> Delete Movie </button>
    `
    // make the buttons helpful to us by adding an id , adding class so that we are grabbing the correct button one button at a time
    movieslist.appendChild(li)
    li.addEventListener('click', handleLiClick)


    // const deleteButton= li.querySelector('.delete') // grabbing the correct delete button
    // deleteButton.addEventListener('click', deleteMovie) // adding an event listener to it to delete the movie
}
    // I can change my innerhtml w/o having to deal with adding/removing event listeners each time I make a change to my app
    function handleLiClick(e){
      if(e.target.innerText === "Edit Movie"){

      } else if (e.target.innerText === "Delete Movie"){
          deleteMovie(e)
      }
    }
  // we are removing it before the fetch request, it is not pessimistic rendering; it is optimistic!
  function deleteMovie(e){
    e.target.parentElement.remove()
    const id = e.target.dataset.id

    const configObj = {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      }
    }
    fetch(`http://localhost:3000/api/v1/movies/${id}`, configObj) //interpolating the id
      .then(res => res.json())
      .then(json => alert(json.message))
  }



getMovies()