
const router = require('express').Router();
const isNotAuth = require('../lib/isNotAuth');
const { User } = require('../db/models');
const bcrypt=require('bcrypt');



router.post('/signup', isNotAuth, async (req, res) => {
  console.log('ответ от бэка');
  try {
    const hashedPassword= await bcrypt.hash(req.body.password,10);
    const createUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      
    });
    req.session.user={id:createUser.id, name:createUser.name, email:createUser.email}
  } catch (err) {
    console.error(err);
  }
});

router.get('/signin', isNotAuth, (req, res) => {
});

router.post('/signin', isNotAuth, async (req, res) => {

  try {
    const createUser = await User.findOne({ where: { name: req.body.name, password: req.body.password } });
    req.session.user = createUser;
  } catch (err) {
    console.error(err);
  }
  });

module.exports = router;
