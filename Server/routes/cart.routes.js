module.exports = app =>{
    const maboneng =require ("../controller/maboneng.controller");
    var router = require("express").Router();
     //Cart
     router.get('/', maboneng.getAllCartItems)
     router.get('/:id', maboneng.getCartItemById)
      router.post('', maboneng.addCartItem)
     router.put('/:id', maboneng.updateCart)
     router.delete('/:id', maboneng.deleteCartItem)
     router.delete('', maboneng.deleteAllCartItems)

     app.use('/api/cart',router);
     
}