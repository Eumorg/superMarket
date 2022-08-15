const router = require("express").Router();
const { Order, User, Cart, Device } = require("../db/models");

router.get("/", async (req, res) => {
  const data = await Order.findAll({
    include: [{ model: User }, { model: Cart, include: Device }],
    raw: true,
  });

  return res.json(data);

  try {
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

router.post("/getUserId", async (req, res) => {
  const user = req.body.userName;

  

  const data = await User.findOne({ where: { name: user }, raw: true });

  return res.json(data);

  try {
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

module.exports = router;
