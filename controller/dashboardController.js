const Stock = require("../model/stockModel");

//for listing
module.exports.getAllStocks = async (req, res, next) => {
  const stock = await Stock.find();
  let totalQuantity = 0;
  let totalInvestment = 0;
  let totalsoldAmount = 0;
  let totalcurrentAmount = 0;
  let totalBuyAmount = 0;
  let overallprofit = 0;
  for (const element of stock) {
    totalInvestment += element.investment;
    if (element.transactionType === "sell") {
      totalQuantity -= element.quantity;
      totalsoldAmount += element.soldAmount;
    } else if (element.transactionType === "buy") {
      totalQuantity += element.quantity;
      totalBuyAmount += element.buyAmount;
    }
  }
  for (const element of stock) {
    let sell = 0,
      sellQuantity = 0,
      buy = 0,
      buyQuantity = 0,
      invenstmentAverage = 0,
      profit = 0,
      loss = 0;
    const singleStock = await Stock.find({ stockName: element.stockName });
    for (const el of singleStock) {
      if (el.transactionType === "sell") {
        sell += el.soldAmount;
        sellQuantity += el.quantity;
      } else if (el.transactionType === "buy") {
        buy += el.buyAmount;
        buyQuantity += el.quantity;
      }
    }
    const sellAvg = sell / sellQuantity;
    const buyAvg = buy / buyQuantity;
    let totalQuant = buyQuantity - sellQuantity;
    const profitLoss = sellAvg - buyAvg;
    if (profitLoss < 0) {
      loss = profitLoss * totalQuant;
    } else {
      profit = profitLoss * totalQuant;
    }
    if (element.transactionType === "sell") {
      totalcurrentAmount = totalInvestment - element.soldAmount;
    } else if (element.transactionType === "buy") {
      totalcurrentAmount = totalInvestment + element.buyAmount;
    }
    invenstmentAverage = element.investment / element;
  }

  return res.status(200).json({
    data: {
      totalQuantity,
      totalInvestment,
      totalcurrentAmount,
      totalsoldAmount,
      totalBuyAmount,
      profit,
      loss,
      stock,
    },
  });
};
