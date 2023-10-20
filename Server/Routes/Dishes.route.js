
const router = require("express").Router();

const {AddDishes,RemoveDishes,EditDishes} = require("../Controllers/Dishes.controller")

router.post("/AddDishes", AddDishes);
router.post("/RemoveDishes", RemoveDishes);
router.post("/EditDishes/:_id", EditDishes);


module.exports = router;