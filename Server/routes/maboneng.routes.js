module.exports = app =>{

    const maboneng =require ("../controller/maboneng.controller");
    var router = require("express").Router();

    // Product
     router.get('/', maboneng.getProducts)
    router.get('/:id', maboneng.getProductById)
     router.post('/', maboneng.createProduct)
    router.put('/:id', maboneng.updateProduct)
    router.delete('/:id', maboneng.deleteProduct) 
    
    app.use('/api/maboneng',router);
}