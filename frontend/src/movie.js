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

        // propertities - the HTML element that has the movie
        // if I go into another  instance function inside of this class, I have access to this li and later I could attach it to the DOM. this li/this element
        this.li = document.createElement('li')
        this.li.dataset["id"] = id
        this.li.id = `movieid-${id}` // gives what movie it is when I inspect it on the page to help organize it 
        this.li.addEventListener('click', this.handleLiClick)


        // no code gets left behind
        Movie.all.push(this)
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
            <button class="edit" data-id="${this.id}"> Edit Movie </button>
            <button class="delete" data-id="${this.id}"> Delete Movie </button>
        `
        return this.li
    }

        handleLiClick = (e) => {
            if(e.target.innerText === "Edit Move"){
                e.target.innerText = "Save"
                this.createFieldForEdits(e.target)
            } else if (e.target.innerText === "Delete Movie"){
                this.deleteMovie(e)
            } else if(e.target.innerText === "Save"){
                e.target.innerText = "Edit Movie"
                // save this info to the DB
                // turn all input fields back into spans
                this.saveEditedMovie()
            }
        }

        

    attachDOM(){
        // it is going to return the .li, still attaching to the DOM and load all of the inner html 
        Movie.movieContainer.appendChild(this.render())
        // class level 

    }
}