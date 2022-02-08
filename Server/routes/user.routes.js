module.exports = app =>{
 
    const maboneng =require ("../controller/maboneng.controller");
    var router = require("express").Router();

      // user routes
      router.get('/', maboneng.getAllUsers)
      router.get('/:id', maboneng.getUserById)
       router.post('', maboneng.addUser)
      router.put('/:id', maboneng.updateUser)
      router.delete('/:id', maboneng.deleteUser)
      router.delete('/', maboneng.deleteAllCartItems)

    app.use('/api/user',router);

}