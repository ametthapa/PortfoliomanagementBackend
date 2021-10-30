const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  S_N: {
    type: Number,
    default: 0,
  },
  stockName: {
    type: String,
    required: true,
    lowercase: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  transactionDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("stocks", Schema);
