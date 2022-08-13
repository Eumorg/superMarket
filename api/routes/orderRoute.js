const router = require('express').Router();
const { Order, User, Cart, Device } = require('../db/models');

router.get('/', async (req, res) => {

  

  const data = await Order.findAll({include: [{model: User},{model: Cart}],  raw: true})
  

  return res.json( data )


  try {

  } catch (error) {
     console.error('Ошибка:', error);
  }
})

module.exports = router;
