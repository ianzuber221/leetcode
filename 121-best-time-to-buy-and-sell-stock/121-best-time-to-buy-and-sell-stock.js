/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0, sell = 1, profit = 0;
   while(sell < prices.length){
       if(prices[buy] < prices[sell]){
           if(prices[sell] - prices[buy] > profit) profit = prices[sell] - prices[buy];
       } else{
           buy = sell;
       }
       sell++;
   }
    return profit;
};