const router = require('express').Router();
const { Review } = require('../db/models');

router.post('/', async (req, res) => {
   try {
      const { val } = req.body
      const { id, name } = req.session?.user
      await Review.create({
         user_id: id,
         username: name,
         post: val
      })
      res.status(200).end()
   } catch (error) {
      console.error('Ошибка:', error);
   }
})

router.get('/', async (req, res) => {
   try {
      const data = await Review.findAll({ order: [['createdAt', 'DESC']] });
      return res.json(data);
   } catch (error) {
      console.error('Ошибка:', error);
   }
})

module.exports = router;