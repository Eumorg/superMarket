const router = require('express').Router();
const { Device } = require('../db/models');

router.get('/', async (req, res) => {
   const data = await Device.findAll();
   return res.json(data);
})

module.exports = router;