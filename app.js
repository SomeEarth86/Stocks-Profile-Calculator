var initialPrice = document.querySelector('#initial-price');
var qtyStocks = document.querySelector('#qty-stocks');
var currentPrice = document.querySelector('#current-price');
var resultDisplay = document.querySelector('#result');
var resultButton = document.querySelector('#resultbtn');

resultButton.addEventListener('click', getResults);

function getResults() {

    // console.log(typeof initialPrice.value);
    var initialP = Number(initialPrice.value);
    var qty = Number(qtyStocks.value);
    var curr = Number(currentPrice.value);

    if ((initialP > 0) && (qty > 0) && (curr > 0) ) {
        calculateProfitLoss(initialP, qty, curr);
    }
    else {
        showMessage("Enter valid input");
    }

}

function calculateProfitLoss(initialP, qty, curr) {
    if (curr > initialP) {
        var profit = (curr - initialP) * qty;
        var profitPercentage = (((curr - initialP) * 100)/initialP).toFixed(2);
        showMessage(`Yay, You made profit of ${profit} and the Profit percentage is ${profitPercentage}%`);
    } else if (curr < initialP) {
        var loss = (initialP - curr)*qty;
        var lossPercentage = (((initialP - curr)*100)/initialP).toFixed(2);
        showMessage(` Oops, You made loss of ${loss} units on stocks, the loss percentage is ${lossPercentage}%`);
    } else {
        showMessage("No pain no gain");
    }
}

function showMessage(msg) {
    resultDisplay.innerText = msg;
}