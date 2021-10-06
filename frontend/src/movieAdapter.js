// will be responsible for taking care of all the fetch requests for the movies in the app🤓
// also called an API, both terms are used 

class MovieAdapter{

    // port is the very base piece, easier to change the const defining port than it is to change each and every place I have my local host at. 
    // constructor is my initalizer and is where I will put the properies of the movie adapter; I am setting the propertities of the movie adapter. 
    // deconstructing the id, title, year, rating etc.. the KEYS are going to match what is coming in ({id: element.id, ...element}) then give variables back with the same names. 
    constructor(port) {
        this.baseUrl = `${port}/movies` // this base url which is my local host is equal to port/movies 
      }
    getMovies(){ // fetch requests are ALWAYS asynchronous - GIVES BACK A PROMISE 
        fetch(this.baseUrl)
      // always after a fetch request we must handle our response with a .then. We need to convert it so that it is readable and usable! That is why we parse the JSON. string value (long string of data) -> data we can use. Parse out the data we want to use for our project.
          .then(res => res.json())
          // => can be written as a function, either way is fine! it is just faster with => go into more details about the arrow function?
          .then( json => {
            json["data"].forEach(element => { // iterated through, for each one create a movie object

              // spread operator, attributes is a key inside of an element. The spread operator takes everything that is inside of the element object (attributes) and spreads out the objects inside of this current object. 
              // Spread syntax allows you to spread an array into an object (arrays are technically objects, as is mostly everything in js). When you spread an array into an object, it will add a key: value pair to the object for each array item, where the key is the index and the value is the value stored at that index in the array. It will come out as id: 1, title: "conjuiring", rating, "R" etc list all the KEYS and VALUES. <- so I can use the constructor and get everything I want from it in the format that I need.
                const i = new Movie({id: element.id, ...element.attributes}) // basically mass assigning all of the movie from my backend to create a new movie
                // instantiating a new movie and then it will attach to the dom next 
                i.attachDOM()
            })
          })
    }
    // not using the class name which is movieadapter, this is considered a function
      movieCreation(){
        const movieDetails = {
            title: titleInput.value,
            year: yearInput.value,
            rating: ratingInput.value,
            length: lengthInput.value,
            description: descriptionInput.value,
            watch: watchInput.value,
            category_id: dropdown.value
          }
          // sending the fetch request to 
          const configObj = { // all the data I am sending and how I want it to be interpreted 
            method: 'POST', //const moviedetails is storing everything in the backend and then in config I am basically putting together the data I need to make a post request. POST = I am sending it
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            // send in the meat of what our backend needs in a format that is safe to send across the internet and is correct
            body: JSON.stringify(movieDetails) // when we are posting an object we want to convert it to a JSON string for our program.
          }
          // to baseURL it will take in the extra information coming through, this is also pessimistic rendering where it will only display IF the fetch request goes through
          fetch(this.baseUrl, configObj) // sending it to the backend and creates a new movie creating a new json string
            .then(res => res.json()) // handling the response by converting it
            .then(json => {
              const i = new Movie({id: json.data.id, ...json.data.attributes}) // mass assignment
              i.attachDOM()
              //  renderMovie(json.data)) // not having to refresh each time
              // if the category can find the right id for the movie id then let the category object be placed in it's correct category that the user chooses. Let the category object equal the new category being created with the movie it is paired with 
             })
      }

    deleteMovie = (id) => {
        const configObj = { // all the data I am sending and how I want it to be interpreted 
            method: 'DELETE', 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(`${port}/movies/${id}`, configObj) // config is telling the user to delete
            .then(r => r.json()) //handling the response by converting it
            .then(json => alert(json.message)) // succesfully deleted movie
      }
}