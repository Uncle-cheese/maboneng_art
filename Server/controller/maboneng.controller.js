const pool = require("../config/config");

exports.getProducts = (request, response) => {
  pool.query('SELECT * FROM product', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

exports.getProductById = (request, response) => {
  const id = request.params.id; 
    pool.query(`SELECT * FROM product WHERE id = $1`, [id], (error, results) => {
      if (error) {
        throw error 
      }
      response.status(200).json(results.rows[0])
    })
};
 
exports.createProduct = (request, response) => { 
  const {  name, inventory_id, category_id, description, price, created_at, imageurl, modified_at, deleted_at } = request.body;
  console.log(request.body);
  pool.query('INSERT INTO product ( name, inventory_id, category_id, description, price, created_at, imageurl, modified_at, deleted_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)', [name, inventory_id, category_id, description, price, created_at, imageurl, modified_at, deleted_at], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results}`)
  })
}; 

exports.updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { inventory_id} = request.body  
  pool.query(
    `UPDATE product SET inventory_id = $1 WHERE  id = $2`,
    [inventory_id,id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product modified with ID: ${id}`)
    }
  )
};

exports.deleteProduct = (request, response) => {
   const id = parseInt(request.params.id);

  // const id = request.body;

  pool.query('DELETE FROM product WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
};
// // Cart 
exports.getAllCartItems = (request, response) => {
  pool.query('SELECT * FROM cart_items', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

exports.getCartItemById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(`SELECT * FROM cart_items WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};
exports.addCartItem = (request, response) => {
  const { product_id, name, user_id, shopping_session_id, quantity, price, created_at, modified_at } = request.body;
  pool.query('INSERT INTO cart_items (product_id, name, user_id, shopping_session_id, quantity, price, created_at, modified_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
    [ product_id, name, user_id, shopping_session_id, quantity, price, created_at, modified_at], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results }`)
    })
};
exports.updateCart = (request, response) => {
  const id = parseInt(request.params.id)
  const { quantity } = request.body
  pool.query(
    `UPDATE cart_items SET quantity = $2 WHERE id = $1`,
    [id, quantity],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product modified with ID: ${id}`)
    }
  )
};

exports.deleteCartItem = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(`DELETE FROM cart_items WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product deleted with ID: ${id}`)
  })
};
exports.deleteAllCartItems = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(`DELETE FROM cart_items`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`All Products deleted`)
  }) 
};

// Users 
exports.getAllUsers = (request, response) => {
  pool.query('SELECT * FROM usered', (error, results) => { 
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

exports.getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(`SELECT * FROM usered WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows) 
  })
};
exports.addUser = (request, response) => {

  const {  username, email, lastname, firstname, gender, initials, password, phone, photourl, roleid, last_login, created_at, profilecomplete, active } = request.body;

  pool.query('INSERT INTO usered ( username, email, lastname, firstname, gender, initials, password, phone, photourl, roleid, last_login, created_at, profilecomplete, active) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14 ) ',
    [username, email, lastname, firstname, gender, initials, password, phone, photourl, roleid, last_login, created_at, profilecomplete, active], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
};
exports.updateUser= (request, response) => {
  const id = parseInt(request.params.id)
  const { username, email, lastname, firstname, } = request.body

  pool.query(
    `UPDATE usered SET username = $2, email = $3, lastname = $4, firstname = $5 WHERE id = $1`,
    [id,username, email, lastname, firstname],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product modified with ID: ${id}`)
    }
  )
};

exports.deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(`DELETE FROM usered WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product deleted with ID: ${id}`)
  })
};


