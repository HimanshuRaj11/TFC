const router = require("express").Router()

const {AddCategory,RemoveCategory} = require("../Controllers/Category.controller")

router.post("/AddCategory", AddCategory);
router.post("/RemoveCategory", RemoveCategory);

module.exports = router;