// will be responsible for taking care of all the fetch requests for the movies in the app🤓
// also called an API, both terms are used 

class MovieAdapter{

    // port is the very base piece, easier to change the const defining port than it is to change each and every place I have my local host at. 
    constructor(port) {
        this.baseUrl = `${port}/movies`
      }
    // static because they are easier to call, static function get referred to their class and then I call the name
    getMovies(){
        fetch(this.baseUrl)
      // always after a fetch request we must handle our response with a .then. We need to convert it so that it is readable and usable! That is why we parse the JSON. string value > data we can use
          .then(res => res.json())
          // => can be written as a function, either way is fine! it is just faster with =>
          // magic
          .then( json => {
            json["data"].forEach(element => {

              // spread operator, attributes is a key inside of an element. The spread operator takes everything that is inside of the element object (attributes) and spreads out the objects inside of this current object. 
              // Spread syntax allows you to spread an array into an object (arrays are technically objects, as is mostly everything in js). When you spread an array into an object, it will add a key: value pair to the object for each array item, where the key is the index and the value is the value stored at that index in the array. It will come out as id: 1, title: "conjuiring", rating, "R" etc list all the KEYS and VALUES. <- so I can use the constructor and get everything I want from it in the format that I need.
                const i = new Movie({id: element.id, ...element.attributes})
                // insantiate a new movie and then it will attach to the dom next 
                i.attachDOM()
            })
          })
    }
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
          fetch(this.baseUrl, configObj)
            .then(res => res.json())
            .then(json => {
              const i = new Movie({id: json.data.id, ...json.data.attributes})
              i.attachDOM()
              //  renderMovie(json.data)) // not having to refresh each time

              // if the category can find the right id for the movie id then let the category object be placed in it's correct category that the user chooses. Let the category object equal the new category being created with the movie it is paired with 
              // if(!Category.all.find((c) => c.id == i.categoryId)) don't need this code 
              {
                let categoryObj = new Category({id: i.categoryId})
                categoryObj.attachDOM()
                categoryObj.addToDropDown()
             }
          })
      }

    deleteMovie = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(`${port}/movies/${id}`, configObj)
            .then(r => r.json())
            .then(json => alert(json.message)) // succesfully deleted movie
      }
}