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

router.post("/setOrder", async (req, res) => {
  try {
    const userId = req.body.id;
    const devices = req.body.devices;

    await Order.create({
      user_id: userId,
      status: "создан",
    });

    const orders = await Order.findAll({
      where: { user_id: userId },
      raw: true,
    });
    const orderId = orders.reverse()[0].id;

    devices.forEach((el) => {
      Cart.create({
        user_id: userId,
        device_id: el.id,
        order_id: orderId,
        count: el.count,
      });
    });
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


router.put("/win", async (req, res) => {
   try {
      const data = req.body;
      const order = await Order.findOne({ where: { id: data[0].id } });
      order.status = "Выполнен";
      order.save();
      res.status(200).end();
  } catch (error) {
    console.error("Ошибка:", error);
  }
});
module.exports = router;
