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
            json["data"].forEach(element => {
                const i = new Movie({id: element.id, ...element.attributes})
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
            // image: imageInput.value,
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

              if(!Category.all.find((c) => c.id == i.categoryId)){
                let categoryObj = new Category({id: i.categoryId, name: json.data.attributes.category_name})
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
            .then(json => alert(json.message))
      }

}