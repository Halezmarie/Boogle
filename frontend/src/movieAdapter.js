class MovieAdapter{
 
    constructor(port) {
        this.baseUrl = `${port}/movies` 
      }
    getMovies(){ 
        fetch(this.baseUrl)
          .then(res => res.json())
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
            description: descriptionInput.value,
            watch: watchInput.value,
            category_id: dropdown.value
          } 
          const configObj = { 
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(movieDetails) 
          }
        
          fetch(this.baseUrl, configObj) 
            .then(res => res.json()) 
            .then(json => {
              const i = new Movie({id: json.data.id, ...json.data.attributes}) 
              i.attachDOM()
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