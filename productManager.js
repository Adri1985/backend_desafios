const Product = require('./Product.js').Product;

class productManager{
    constructor()
    {
        this.products = []

    }
    
    getNextID= () => {
        const count =this.products.length
        return (count> 0) ? this.products[count-1].id + 1 : 1
    }

    addProduct = ( code,title, description, price, thumbnail, stock) =>{
        if (this.products.find((el)=> el.code == code)!= undefined)
        {
            console.log("codigo duplicado")
        } 
        else{
            if(code&&title&&description&&price&&thumbnail&&stock){
                this.products.push(new Product(this.getNextID(),code,title, description, price, thumbnail, stock))
                console.log("Producto agregado a la lista")
            }
            else{
                console.log("all fields are mandatory, product not added")
            }
            
        }
    

    }

    getProducts = () =>{
        return this.products
    }

    getProductById = (id) => {
        const productFound =  this.products.find ((el) => el.id == id)

        console.log("productFound", productFound)
        if (productFound == undefined){
            console.log (`product ${id} not found`)
            return({})
        }
        else{
            console.log(productFound)
            return(productFound)
        }
               
    }
}

let productManager1 = new productManager();

productManager1.addProduct(123,"Meepo","Mini2", "Electric Skateboard",400, "./meepo.jpg", 10);
productManager1.addProduct(124,"Segway","Ninebot", "Electric Scooter",400, "./Ninebot.jpg", 10);
productManager1.addProduct(124,"Segway","Ninebot", "Electric Scooter",400, "./Ninebot.jpg", 10); // duplicado
productManager1.addProduct(125, "philco","S90", "", 500, "./philco.jpg", 20); // violacion de campos mandatorios


console.log(productManager1)
productManager1.getProductById(2)


