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

// // function renderMovie(movie){
//   // this function is automatically going to receive the info from the .then(rendermovies)
//    // const li is a const because even though it will be changing for each iteration through our elements, every iteration is actually its OWN scope. const are its own block scope so it is its own li that exists while it makes the li and then the NEXT li it works on it will start all over again brand new -- LIKE A FACTORY!
//     // const li = document.createElement('li')
//     // li.dataset["id"] = movie.id
//     // li.id = `movieid-${movie.id}` // gives what movie it is when I inspect it on the page to help organize it 
//     // renderInnerLi(li, movie)
//     // // make the buttons helpful to us by adding an id , adding class so that we are grabbing the correct button one button at a time
//     // movieslist.appendChild(li)
//     // li.addEventListener('click', handleLiClick)


//     // const deleteButton= li.querySelector('.delete') // grabbing the correct delete button
//     // deleteButton.addEventListener('click', deleteMovie) // adding an event listener to it to delete the movie
// // }
//     // I can change my innerhtml w/o having to deal with adding/removing event listeners each time I make a change to my app. Any clicks to the li
//     // MOVED OVER TO MOVIE.JS
//     // function handleLiClick(e){
//     //   if(e.target.innerText === "Edit Movie"){
//     //     e.target.innerText = "Save"
//     //     createFieldForEdits(e.target) // editing the right one
//     //   } else if (e.target.innerText === "Delete Movie"){
//     //       deleteMovie(e)
//     //   } else if(e.target.innerText === "Save"){ // when the user hits save they will  be led here
//     //     e.target.innerText = "Edit Movie"
//     //     // need to make patch request etc 
//     //     saveEditedMovie(e.target)

//     //   }
//     // }

//     function saveEditedMovie(saveButton){
//       // debugger to make sure it is hitting this 
//       // patch request in here with the configobj and data we want
//       const li = saveButton.parentElement
//       const id = li.dataset.id // so that I can grab the id out of the dataset, lets me keep track of the id
//       const titleInput = li.querySelector(".edit-title")
//       const yearInput = li.querySelector(".edit-year")
//       const ratingInput = li.querySelector(".edit-rating")
//       const lengthInput = li.querySelector(".edit-length")
//       const descriptionInput = li.querySelector(".edit-description")
//       const watchInput = li.querySelector(".edit-watch")
     
//       const movieDetails = {
//         title: titleInput.value,
//         year: yearInput.value,
//         rating: ratingInput.value,
//         length: lengthInput.value,
//         // image: imageInput.value,
//         description: descriptionInput.value,
//         watch: watchInput.value
//       }
//       // sending the fetch request to 
//       const configObj = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         // send in the meat of what our backend needs in a format that is safe to send across the internet and is correct
//         body: JSON.stringify(movieDetails)
//       }
//       fetch(`http://localhost:3000/api/v1/movies/${id}`, configObj)
//       .then(res => res.json())
//       .then(json => {
//         renderInnerLi(li, json.data)
//        // letting the edit be replaced in the same exact spot 
//     })
//   }

//     function createFieldForEdits(editButton){
//       // debugger make sure it is hitting the edit button
//       const li = editButton.parentElement
//       const div = editButton.parentElement.children[0]

//       for(const e of div.children){
//         let inputValue = e.innerText
//         let name = e.classList[0]
//         e.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}">`
//       }
//     }

//   // we are removing it before the fetch request, it is not pessimistic rendering; it is optimistic!
//   function deleteMovie(e){
//     e.target.parentElement.remove()
//     const id = e.target.dataset.id

//     const configObj = {
//       method: 'DELETE',
//       headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//       }
//     }
//     fetch(`http://localhost:3000/api/v1/movies/${id}`, configObj) //interpolating the id
//       .then(res => res.json())
//       .then(json => alert(json.message))
//   }

  // handleLiClick(e){
  //   if(e.target.innerText === "Edit Movie"){
  //     e.target.innerText = "Save"
  //     createFieldForEdits(e.target) // editing the right one
  //   } else if (e.target.innerText === "Delete Movie"){
  //       deleteMovie(e)
  //   } else if(e.target.innerText === "Save"){ // when the user hits save they will  be led here
  //     e.target.innerText = "Edit Movie"
  //     // need to make patch request etc 
  //     saveEditedMovie(e.target)

  // 