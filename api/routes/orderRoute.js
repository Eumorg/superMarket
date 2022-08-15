const router = require('express').Router();
const { Order, User, Cart, Device } = require('../db/models');

router.get('/', async (req, res) => {

  const data = await Order.findAll({ include: [{ model: User }, { model: Cart, include: Device }], raw: true })

  return res.json(data)
})


router.put('/', async (req, res) => {
  const data = req.body;
  
  const arrayKeys = Object.keys(data);
  
  for (let i = 0; i < arrayKeys.length; i++) {
    const order = await Order.findOne({ where: { id: arrayKeys[i] } })
    order.status = data[arrayKeys[i]];
    order.save();
  }
  res.status(200).end()
})



module.exports = router;
