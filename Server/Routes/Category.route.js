const router = require("express").Router()

const {AddCategory,RemoveCategory,fetchCategory,editCategory} = require("../Controllers/Category.controller")

router.post("/AddCategory", AddCategory);
router.post("/RemoveCategory", RemoveCategory);
router.get("/fetchCategory", fetchCategory);
router.post("/editCategory", editCategory);

module.exports = router;