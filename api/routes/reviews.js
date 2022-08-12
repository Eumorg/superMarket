const router = require('express').Router();

router.post('/', async (req, res) => {

   console.log(req.body);
   try {

   } catch (error) {
      console.error('Ошибка:', error);
   }
})

module.exports = router;