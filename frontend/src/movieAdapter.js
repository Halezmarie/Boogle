// will be responsible for taking care of all the fetch requests for the movies in the app🤓
// also called an API, both terms are used 

class MovieAdapter{

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
            const movies = json["data"]
          movies.forEach(element => {
                const h = new Movie({id: element.id, ...element.attributes}) // using es6 syntax so I can access all of the info
                // attaching to h so that it is being called on a movie object
                h.attachDOM()
                // renderMovie(element)
            })
          // ^ this does not need () because I want to call it later on. I am just listing the definition for now
      })
    }
      movieCreation(){
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
          fetch(this.baseUrl, configObj)
            .then(res => res.json())
            .then(json => {
              const h = new Movie({id: json.data.id, ...json.data.attributes})
              h.attachDOM()
              //  renderMovie(json.data)) // not having to refresh each time
        })
      }
}