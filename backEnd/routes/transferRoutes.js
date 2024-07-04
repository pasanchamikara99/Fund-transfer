const express = require("express");
const router = express.Router();

const transferController = require("../controllers/TransferController");

// router.delete("/delettransfer/:id", transferController.deleteBook);
router.post("/addtransfer", transferController.addtransfer);
router.get("/getalltransfers", transferController.getAllTransfer);

module.exports = router;
