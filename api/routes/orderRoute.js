const router = require("express").Router();
const { Order, User, Cart, Device } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const data = await Order.findAll({
      include: [{ model: User }, { model: Cart, include: Device }],
      raw: true,
    });

    return res.json(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

router.post("/getUserId", async (req, res) => {
  try {
    const user = req.body.userName;

    const data = await User.findOne({ where: { name: user }, raw: true });

    return res.json(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

router.put("/", async (req, res) => {
  try {
    const data = req.body;

    const arrayKeys = Object.keys(data);

    for (let i = 0; i < arrayKeys.length; i++) {
      const order = await Order.findOne({ where: { id: arrayKeys[i] } });
      order.status = data[arrayKeys[i]];
      order.save();
    }
    res.status(200).end();
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

module.exports = router;
