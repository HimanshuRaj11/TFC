
const router = require("express").Router();

const {AddDishes,RemoveDishes,EditDishes,fetchAllDishes,fetchCategoryDishes,fetchDishById} = require("../Controllers/Dishes.controller")

router.get("/fetchAllDishes", fetchAllDishes);
router.get("/fetchCategoryDishes/:category", fetchCategoryDishes);
router.post("/AddDishes", AddDishes);
router.post("/RemoveDishes", RemoveDishes);
router.post("/EditDishes/:_id", EditDishes);
router.get("/fetchDishById/:_id", fetchDishById);


module.exports = router;