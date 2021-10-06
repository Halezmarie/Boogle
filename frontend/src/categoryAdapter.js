class CategoryAdapter {

    constructor(port){
        this.baseUrl = `${port}/categories`
    }

    getCategories(){
        fetch(this.baseUrl) 
        .then(r => r.json()) 
        .then( json => { 
            json["data"].forEach(category => { 
                const h = new Category({id: category.id, ...category.attributes}) 
                h.attachDOM() 
                h.addToDropDown() 
            })
        })
    }
}