const Stock = require("../model/stockModel");

//for listing
module.exports.getAllStock = async (req, res, next) => {
  const stock = await Stock.find();
  return res.status(200).json({
    data: stock,
  });
};

//fot inserting
module.exports.insertStock = async (req, res, next) => {
  let { stockName, transactionType, quantity, amount, transactionDate } =
    req.body;
  console.log(req.body);
  const count = await Stock.countDocuments();
  let investment = 0;
  let soldAmount = 0;
  let currentAmount = 0;

  if (transactionType === "sell") {
    soldAmount = quantity * amount;
  } else if (transactionType === "buy") {
    investment = quantity * amount;

    buyAmount = quantity * amount;
  }

  const stock = new Stock({
    S_N: count + 1,
    stockName,
    transactionType,
    quantity,
    amount,
    transactionDate,
    soldAmount,
    buyAmount,
    investment,
  });
  await stock.save();
  return res.status(200).json({
    message: `Stock inserted successfully ${stock}`,
  });
};

//updating
module.exports.updateStock = async (req, res, next) => {
  let { id, stockName, transactionType, quantity, amount, transactionDate } =
    req.body;

  const stock = await Stock.findById(id);
  stock.stockName = stockName;
  stock.transactionType = transactionType;
  stock.quantity = quantity;
  stock.amount = amount;
  stock.transactionDate = transactionDate;
  await stock.save();
  return res.status(200).json({
    message: "Stocks are updates",
  });
};

//deleting
module.exports.deleteStock = async (req, res, next) => {
  const stock = await Stock.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: "stocks deleted",
  });
};
