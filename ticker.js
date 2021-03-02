// I am able to load in these calls from the API fine and dandy. Now I want to round them to several decimal places. the tofixed method isn't a function and is throwing a type error

// after this I need to separate and format these tickers out to look nicer on the page. But it's nice having a functioning API req response for once.

// links
// https://www.alphavantage.co/documentation/#
// http://jsonselector.com/process
// https://stackoverflow.com/questions/30247108/round-all-decimals-from-dynamic-json-to-2-decimal-places
// file:///C:/Users/joelm/Google%20Drive/Web%20Dev/Broadsheets/mypage.html
// file:///C:/Users/joelm/Google%20Drive/Books/coding/For%20Professionals/jQuery%20Notes%20For%20Professionals%20.pdf



// function getUSDJPY(){
//     $.ajax({url:"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=GXQSJYQV0HUC8K36", success: function(result){
//         let USDJPY = result['Realtime Currency Exchange Rate']['8. Bid Price'];
//         let USDJPYrnd = USDJPY.toFixed(2);
//         $('#USDJPY').html(USDJPYrnd);
//     }});
// };

// function getGBPUSD(){
//     $.ajax({url:"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=GBP&to_currency=USD&apikey=GXQSJYQV0HUC8K36", success: function(result){
//         let GBPUSD = result['Realtime Currency Exchange Rate']['8. Bid Price'];
//         let GBPUSDrnd = GBPUSD.toFixed(2);
//         $('#GBPUSD').html(GBPUSDrnd);
//     }});
// };

// function getEURUSD(){
//     $.ajax({url:"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey=GXQSJYQV0HUC8K36", success: function(result){
//         let EURUSD = result['Realtime Currency Exchange Rate']['8. Bid Price'];
//         let EURUSDrnd = EURUSD.toFixed(2);
//         $('#EURUSD').html(EURUSDrnd);
//     }});
// };

// function getBTCUSD(){
//     $.ajax({url:"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=GXQSJYQV0HUC8K36", success: function(result){
//         let BTCUSD = result['Realtime Currency Exchange Rate']['8. Bid Price'];
//         let BTCUSDrnd = BTCUSD.toFixed(2);
//         $('#BTCUSD').html(BTCUSDrnd);
//     }});
// };

// function getETHUSD(){
//     $.ajax({url:"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=GXQSJYQV0HUC8K36", success: function(result){
//         let ETHUSD = result['Realtime Currency Exchange Rate']['8. Bid Price'];
//         let ETHUSDrnd = ETHUSD.toFixed(2);
//         $('#ETHUSD').html(ETHUSD);
//     }});
// };


// $(document).ready(function() {
//     getUSDJPY();
//     getGBPUSD();
//     getEURUSD();
//     getBTCUSD();
//     getETHUSD();
// });