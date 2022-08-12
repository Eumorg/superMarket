const router = require('express').Router();
const { Device}= require ('../db/models');


router.post('/', async (req, res) => {
    const createDevice = await Device.create({
    model:req.body.model,
    description:req.body.description,
    price:req.body.price,
    type:req.body.type, 
    color:req.body.color, 
    picture:req.body.picture,
    status:req.body.status
   });
   res.status(200).end()
})


module.exports = router;