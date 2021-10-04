class Category{

    // static is a class variable, each time a movie is instantiated coming through the constructor things will be PUSHED into the static all variable /empty array
    static all = []

    static categoryContainer = document.getElementById('category-container')

     // constructor is my initalizer and is where I will put the properies of the categories; I am setting the propertities of the categories
    // deconstructing the id and name ({id: element.id, ...element}) then give variables back with the same names. 
    // id is the category ids, 1 2 3 4 left to right 
    constructor({id, name }){
        this.id = id 
        this.name = name
        this.active = false // activation for the categories 
       
        this.li = document.createElement('button') // the category buttons
        Category.all.push(this)
         // <- because it is at the instance level not the class level, so then I go ahead and PUSH the current category which is THIS because it is the category. Instantiating them. Like self. 
        // ^ this is a way to reuse my code grabbing category.all and sorting/filtering them etc
    }

    movies(){
        return Movie.all.filter((movie) => movie.categoryId == this.id)
    }

    // just making the button for the category
    render(){
        this.li.innerText = this.name 
        this.li.id = `category-${this.id}`
        return this.li
    }
    // add event listeners so that they can listen for when the category buttons are clicked 
    attachDOM(){
        Category.categoryContainer.append(this.render())
        this.addListeners()
    }
    
    // event listener for the chosen category that the user uses 
    addListeners(){
        this.li.addEventListener('click', this.setChosenCategory)
    }

    setChosenCategory = (e) => {
        let filteredCategory // define it as a variable
        Category.all.forEach(c => {
            if(c.li === this.li && !this.active){
                // inspect and see that the div will change to activated when you click on it 
                c.li.classList.add('activated')
                c.active = true
                filteredCategory = c // and if we get one filtered display it 
            }else{
                c.li.classList.remove('activated')
                c.active = false // do not display anything because we are not getting an active true
            }
            Movie.filterByMovieCategory(filteredCategory)
        }) 
    }

    // being triggered from the index.js
    addToDropDown(){
        const dropdown = document.getElementById('category-dropdown') // select my dropdown
        const option = document.createElement('option') // create option element
        option.value  = this.id // create the value of the dropdown - what it represents like the id, 1, 2, 3, 4 - better to do this instead of hard coding it 
        option.innerText = this.name // gave it the text, where we see the category name 
        dropdown.append(option) // appended it to the dropdown
    } 
}
