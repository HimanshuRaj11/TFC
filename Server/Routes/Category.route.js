const router = require("express").Router()

const {AddCategory,RemoveCategory,fetchCategory,editCategory,getOneCategory} = require("../Controllers/Category.controller")

router.post("/AddCategory", AddCategory);
router.post("/RemoveCategory", RemoveCategory);
router.get("/fetchCategory", fetchCategory);
router.post("/editCategory/:_id", editCategory);

module.exports = router;