const express = require("express");
const Transfer = require("../models/Transfer");

const addtransfer = async (req, res) => {
  try {
    const transfer = new Transfer(req.body);
    const result = await transfer.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving transfer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllTransfer = async (req, res) => {
  const transfer = await Transfer.find();

  if (transfer.length > 0) {
    res.status(200).json(transfer);
  } else {
    res.status(404).json({ error: "No transfer found" });
  }
};

module.exports = {
  addtransfer,
  getAllTransfer,
};
