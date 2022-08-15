
const router = require('express').Router();
const isNotAuth = require('../lib/isNotAuth');
const isAuth = require('../lib/isAuth');
const { User } = require('../db/models');
const bcrypt = require('bcrypt');



router.post('/signup', isNotAuth, async (req, res) => {

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const createUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    req.session.user = { id: createUser.id, name: createUser.name, email: createUser.email }
       res.status(200).end()
  } catch (err) {
    console.error(err);
  }
});

router.post('/signin', isNotAuth, async (req, res) => {
  try {
    const createUser = await User.findOne({ where: { name: req.body.name } });
    // console.log(createUser);
    const isValidPassword = await bcrypt.compare(req.body.password, createUser.password)
    console.log(isValidPassword);
    if (isValidPassword) {
      req.session.user = { id: createUser.id, name: createUser.name, email: createUser.email }
      res.status(200).end()
    }
  } catch (err) {
    console.error(err);
  }
});

router.get('/isauth', (req, res) => {
  if (!req.session.user) {
    return
  }
  res.json(req.session.user);
})

router.get('/signout', isAuth, (req, res) => {
  req.session.destroy();
  res.clearCookie('sid');
  res.status(200).end()
})



module.exports = router;
