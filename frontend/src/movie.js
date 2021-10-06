class Movie{

    static all = []
    static movieContainer = document.getElementById('movies')
   
    constructor({id, title, year, rating, length, description, watch, category_id}){
        this.title = title
        this.year = year
        this.rating = rating
        this.length = length
        this.description = description
        this.watch = watch
        this.id = id
        this.categoryId = category_id
    
        this.li = document.createElement('li')
        this.li.dataset["id"] = id
        this.li.id = `movieid-${id}` 

        this.li.addEventListener('click', this.handleLiClick) 

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

        deleteMovie = (li) => {
            this.li.remove() 
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
                </div>
                <a href="${this.watch}"><button>Watch Me!</button></a>
                <button class="Delete" data-id="${this.id}"> Delete Movie </button>
                _______________________________________________
            `
            return this.li
        }

    attachDOM(){
        Movie.movieContainer.appendChild(this.render())
    }
}