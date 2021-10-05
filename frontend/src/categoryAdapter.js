class CategoryAdapter {

    //port is the very base piece, easier to change the const defining port than it is to change each and every place I have my local host at. 
    // constructor is my initalizer and is where I will put the properies of the category adapter; I am setting the properties of the category adapter. 
    constructor(port){
        this.baseUrl = `${port}/categories`
    }

    getCategories(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => { // got my data back 
            json["data"].forEach(element => { // iterated through

                // spread operator, attributes is a key inside of an element. The spread operator takes everything that is inside of the element object (attributes) and spreads out the objects inside of this current object. 
                 // Spread syntax allows you to spread an array into an object (arrays are technically objects, as is mostly everything in js). When you spread an array into an object, it will add a key: value pair to the object for each array item, where the key is the index and the value is the value stored at that index in the array. serial killer 1, super 2
                const h = new Category({id: element.id, ...element.attributes})
                // made a new category object
                // attaching to h so that it is being called on a category object
                h.attachDOM() // shows up the categories on the dom
                h.addToDropDown() // adds to dropdown
            })
        })
    }
}