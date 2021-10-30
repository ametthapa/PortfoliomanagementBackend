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

  const stock = new Stock({
    S_N: count + 1,
    stockName,
    transactionType,
    quantity,
    amount,
    transactionDate,
  });
  await stock.save();
  return res.status(200).json({
    message: `Stock inserted successfully ${stock}`,
  });
};
