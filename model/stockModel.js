const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
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
  soldAmount: {
    type: Number,
    default: 0,
  },
  buyAmount: {
    type: Number,
    default: 0,
  },
  investment: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("stocks", Schema);
