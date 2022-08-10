
const router = require('express').Router();
const isNotAuth = require('../lib/isNotAuth');
const isAuth = require('../lib/isAuth');
const { User } = require('../db/models');
const bcrypt=require('bcrypt');



router.post('/signup', isNotAuth, async (req, res) => {
   try {
    const hashedPassword= await bcrypt.hash(req.body.password,10);
    const createUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    req.session.user={id:createUser.id, name:createUser.name, email:createUser.email}
    res.status(200).end()
  } catch (err) {
    console.error(err);
  }
});




router.post('/signin',isNotAuth, async (req, res) => {

  try {
    const createUser = await User.findOne({ where: { name: req.body.name } });
    const isValidPassword = await bcrypt.compare(req.body.password, createUser.password)
    if(isValidPassword){
    req.session.user = createUser;
    }
  } catch (err) {
    console.error(err);
  }
  });

router.get('/signout', isAuth, (req, res)=>{
  console.log("ssss");
  req.session.destroy();
  res.clearCookie('sid');
  })



module.exports = router;
