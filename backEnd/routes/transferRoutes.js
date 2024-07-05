const express = require("express");
const router = express.Router();

const transferController = require("../controllers/TransferController");

router.delete("/delettransfer/:id", transferController.deletetransfer);
router.post("/addtransfer", transferController.addtransfer);
router.get("/getalltransfers", transferController.getAllTransfer);

module.exports = router;
