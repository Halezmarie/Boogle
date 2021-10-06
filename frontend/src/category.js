class Category{

    static all = []
    static categoryContainer = document.getElementById('category-container') 

    constructor({id, name }){
        this.id = id 
        this.name = name
        this.active = false 
       
        this.li = document.createElement('button') 
        Category.all.push(this)
    }

    movies(){
        return Movie.all.filter((movie) => movie.categoryId == this.id)
    }

    render(){
        this.li.innerText = this.name 
        this.li.id = `category-${this.id}`
        return this.li
    }

    attachDOM(){
        Category.categoryContainer.append(this.render())
        this.addListeners()
    }
    
    addListeners(){
        this.li.addEventListener('click', this.setChosenCategory)
    }

    setChosenCategory = (e) => {
        let filteredCategory 
        Category.all.forEach(c => {
            if(c.li === this.li && !this.active){
                c.li.classList.add('activated')
                c.active = true
                filteredCategory = c 
            }else{
                c.li.classList.remove('activated')
                c.active = false 
            }
            Movie.filterByMovieCategory(filteredCategory)
        }) 
    }


    addToDropDown(){
        const dropdown = document.getElementById('category-dropdown')
        const option = document.createElement('option') 
        option.value  = this.id
        option.innerText = this.name 
        dropdown.append(option) 
    }

}
