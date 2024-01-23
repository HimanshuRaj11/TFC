const router = require("express").Router();

const {
  AddDishes,
  RemoveDishes,
  EditDishes,
  fetchAllDishes,
  fetchCategoryDishes,
  fetchDishById,
  AddReviews,
  updateRetings,
} = require("../Controllers/Dishes.controller");

router.get("/fetchAllDishes", fetchAllDishes);
router.get("/fetchCategoryDishes/:category", fetchCategoryDishes);
router.post("/AddDishes", AddDishes);
router.post("/RemoveDishes", RemoveDishes);
router.post("/EditDishes/:_id", EditDishes);
router.get("/fetchDishById/:_id", fetchDishById);
router.post("/Add-Reviews/:_id", AddReviews);
router.post("/Update-Ratings/:_id", updateRetings);

module.exports = router;
