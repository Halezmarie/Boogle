// first step: make a fetch request to  my baseURL and display items on the DOM 😁

const movieslist = document.getElementById('movies')


fetch('http://localhost:3000/api/v1/movies')
// always after a fetch request we must handle our response with a .then. We need to convert it so that it is readable and usable! That is why we parse the JSON. string value > data we can use
    .then(res => res.json())
    // => can be written as a function, either way is fine! it is just faster with =>
    // magic
    .then(renderMovies)
    // ^ this does not need () because I want to call it later on. I am just listing the definition for now

// this function is automatically going to receive the info from the .then(rendermovies)
    function renderMovies(rando){
    const movies = rando["data"]
    liElements = movies.map(function(movie){
        let li = document.createElement('li') // putting in li form,  // li text will be the title
        li.innerText = `${movie.attributes.title} - ${movie.attributes.year}`
        // Must return when using map!
        return li
      })
    //   debugger
      liElements.forEach(element => { // I  have access to each li element and I can append each element
        movieslist.appendChild(element)
      });
    
    }
