// movies will become a movie class and it will be in charge of: settings the properties of each movie, remembering all of the movies, the html I want to put on the DOM for each movie, and attach event listeners that goes with each movie 
// step one: instantiate the movies

class Movie{
    // static is a class variable, each time a movie is instantiated coming through the constructor things will be PUSHED into the static all variable /empty array
    static all = []
    static movieContainer = document.getElementById('movies')
    // constructor is my initalizer and is where I will put the properies of the movies 
    // deconstructing the id, title, year, rating etc.. the KEYS are going to match what is coming in ({id: element.id, ...element}) then give variables back with the same names
    constructor({id, title, year, rating, length, description, watch, category_id}){
        this.title = title
        this.year = year
        this.rating = rating
        this.length = length
        this.description = description
        this.watch = watch
        this.id = id
        this.categoryId = category_id

        // properties - the HTML element that has the movie
        // if I go into another  instance function inside of this class, I have access to this li and later I could attach it to the DOM. this li/this element
        this.li = document.createElement('li')
        this.li.dataset["id"] = id
        this.li.id = `movieid-${id}` // gives what movie it is when I inspect it on the page to help organize it 
        this.li.addEventListener('click', this.handleLiClick)


        // no code gets left behind
        Movie.all.push(this)
    }

    static filterByMovieCategory(filteredCategory){
        if(filteredCategory){
            for(const movie of Movie.all){
                if(movie.categoryId === parseInt(filteredCategory.id)){
                    movie.li.style.display = "";
                }else{
                    movie.li.style.display = "none";
                }
            }
        } else {
     
      
            for(const movie of Movie.all){
              movie.li.style.display = ""
            }
      }
  }
        handleLiClick = (li) => {
            if (li.target.innerText === "Delete Movie"){
                this.deleteMovie(li)
            }
        }

        // we are removing it before the fetch request, it is not pessimistic rendering; it is optimistic!
        deleteMovie = (li) => {
            this.li.remove() // remove it before the fetch request 
            movieAdapter.deleteMovie(this.id)
        }


        render(){
            this.li.innerHTML = `
                <div data-id="${this.id}">
                    <strong class="title">${this.title}</strong>
                
                    <span class="year">${this.year}</span>,
                    <span class="rating">${this.rating}</span>,
                    <span class="length">${this.length}</span>.
                    
                    <span class="description">${this.description}</span>
                    
                    <span class="watch">${this.watch}</span> 
                </div>
                <button class="Delete" data-id="${this.id}"> Delete Movie </button>
            `
            return this.li
        }

    attachDOM(){
        // it is going to return the .li, still attaching to the DOM and load all of the inner html 
        Movie.movieContainer.appendChild(this.render())
        // class level 

    }
}