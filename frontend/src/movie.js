// movies will become a movie class and it will be in charge of: settings the properties of each movie, remembering all of the movies, the html I want to put on the DOM for each movie, and attach event listeners that goes with each movie 
// step one: instantiate the movies

class Movie{
    // static is a class variable, each time a movie is instantiated coming through the constructor things will be PUSHED into the static all variable /empty array
    static all = []
    // constructor is my initalizer and is where I will put the properies of the movies 
    // deconstructing the id, title, year, rating etc.. the KEYS are going to match what is coming in ({id: element.id, ...element.attributes}) then give variables back with the same names
    constructor({id, title, year, rating, length, description, watch, category_id}){
        this.title = this.title
        this.year = this.year
        this.rating = this.rating
        this.length = this.length
        this.description = this.description
        this.watch = this.watch
        this.id = id

        // propertities - the HTML element that has the movie
        // if I go into another  instance function inside of this class, I have access to this li and later I could attach it to the DOM
        this.li = document.createElement('li')
        this.li.dataset["id"] = movie.id
        this.li.id = `movieid-${movie.id}` // gives what movie it is when I inspect it on the page to help organize it 



        // nobody gets left behind movement/ remember everyone
        Movie.all.push(this)
    }

    render(){
        li.innerHTML = `
            <div data-id="${movie.id}">
                <strong class="title">${movie.attributes.title}</strong>
            
                <span class="year">${movie.attributes.year}</span>,
                <span class="rating">${movie.attributes.rating}</span>,
                <span class="length">${movie.attributes.length}</span>.
                
                <span class="description">${movie.attributes.description}</span>
                
                <span class="watch">${movie.attributes.watch}</span> 
            
            </div>
            <button class="edit" data-id="${movie.id}"> Edit Movie </button>
            <button class="delete" data-id="${movie.id}"> Delete Movie </button>`
    }

}
    // make the buttons helpful to us by adding an id , adding class so that we are grabbing the correct button one button at a time
    movieslist.appendChild(li)
    li.addEventListener('click', handleLiClick)
}