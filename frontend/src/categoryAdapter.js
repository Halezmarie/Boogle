class CategoryAdapter {

    constructor(port){
        this.baseUrl = `${port}/categories`
    }


    getCategories(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
                const h = new Category({id: element.id, ...element.attributes})
                // attaching to h so that it is being called on a category object
                h.attachDOM()
                h.addToDropDown()
            })
        })
    }
}
