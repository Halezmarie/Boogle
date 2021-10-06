// movies will become a movie class and it will be in charge of: settings the properties of each movie, remembering all of the movies, the html I want to put on the DOM for each movie, and attach event listeners that goes with each movie 
// step one: instantiate the movies

class Movie{
    // static is a class variable, each time a movie is instantiated coming through the constructor things will be PUSHED into the static all variable /empty array
    static all = []
    static movieContainer = document.getElementById('movies')
    // constructor is my initalizer and is where I will put the properies of the movies; I am setting the properties of the movies. 
    // deconstructing the id, title, year, rating etc.. the KEYS are going to match what is coming in ({id: element.id, ...element}) then give variables back with the same names. 
    // id is the movie id of when it was created, cujo was 21 because I made it the 21st time etc 
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
        // if I go into another instance function inside of this class, I have access to this li and later I could attach it to the DOM. this li/this element
        this.li = document.createElement('li') // properties of the movie including the delete button at the end
        this.li.dataset["id"] = id
        this.li.id = `movieid-${id}` // gives what movie it is when I inspect it on the page to help organize it 

        this.li.addEventListener('click', this.handleLiClick) // for delete button listening 
        // makes sense to add the event listener here because it has access to all of the li's here 

        Movie.all.push(this) // <- because it is at the instance level not the class level, so then I go ahead and PUSH the current movie which is THIS because it is the movie. Instantiating them. Like self. 
        // ^ this is a way to reuse my code grabbing movie.all and sorting/filtering them etc 
    }

    static filterByMovieCategory(filteredCategory){
        if(filteredCategory){
            for(const movie of Movie.all){
                //if this movie belongs to the category the user wants to look at, make sure it is not hidden
                if(movie.categoryId === parseInt(filteredCategory.id)){ //parse it because I need them to come as a match key to value 
                    movie.li.style.display = ""; //unhide movie
                }else{
                    movie.li.style.display = "none"; // hide it if the movie doesnt belong to the category
                }
            }
            // if the user have any of the categories clicked then display all of the movies:
        } else { 
             for(const movie of Movie.all){
              movie.li.style.display = ""
            }
      }
    }


        // arrow function because it is used as a callback in an event listener
        handleLiClick = (li) => {
            if (li.target.innerText === "Delete Movie"){ // if inner text is delete movie
                this.deleteMovie(li) // this is the movie
            }
        }

        // we are removing it before the fetch request, it is not pessimistic rendering; it is optimistic!
        deleteMovie = (li) => {
            this.li.remove() // remove it before the fetch request 
            movieAdapter.deleteMovie(this.id)
        }

        // making sue I am using this.id instead of movie.id because I am referring to the movie/this that I have up here 
        render(){
            this.li.innerHTML = `
                <div data-id="${this.id}">
                    <strong class="title">${this.title}</strong>

                    <span class="year">${this.year}</span>,
                    <span class="rating">${this.rating}</span>,
                    <span class="length">${this.length}</span>.
                    
                    <span class="description">${this.description}</span>
                    <br><br>
                    <span class="watch">Watch it here: ${this.watch}</span> 
                </div>
                <button class="Delete" data-id="${this.id}"> Delete Movie </button>
                _______________________________________________
            `
            return this.li
        }
        // ^ allows me to render this element/li based on the data coming in and helps set up that element/li and it still knows all the information.
        // the return makes it easier to attach things to the DOM 

    attachDOM(){
        // it is going to return the .li, still attaching to the DOM and load all of the inner html 
        // render is making sure that all of the inner html has been loaded 
        Movie.movieContainer.appendChild(this.render())
        // class level, so it isnt this 
        // must be called on by movie objects or movie instances, cant just say attachDOM
    }
    // responsibility is to attach everything to the DOM
}