const router = require("express").Router();

const {SetTable,updateTabel} = require("../Controllers/Table.controller.js");


router.post("/setTable", SetTable);
router.post("/updateTable/:_id", updateTabel);

module.exports = router;