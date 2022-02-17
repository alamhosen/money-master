
// cost count function
function costCount (cost){
    const costInput = document.getElementById(cost).value;
    const costAmount = parseFloat(costInput);
    if (isNaN(costAmount)) {
        alert('Please give a Number!');
        return;
      }
        if(costAmount < 0){
        alert('Please give a positive number'); 
        return;
    }
    return costAmount;
};

// getInnerText
function getInnerText (id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
 };

// cost calculator button
document.getElementById('calculateButton').addEventListener('click', function(){
    const totalIncome = costCount('totalIncome');
    const foodCost = costCount ('foodCost');
    const rentCost = costCount ('rentCost');
    const clothesCost = costCount ('clothesCost');

    const totalCost = foodCost + rentCost + clothesCost;
    // error message for extra money spend
    if(totalCost > totalIncome){
        alert("You spend your money greater than your income");
    }
    document.getElementById('totalExpenses').innerText = totalCost;
    const balance = totalIncome - totalCost;
    document.getElementById('balance').innerText = balance;
    
});

// saving calculator
document.getElementById('savingButton').addEventListener('click', function(){
    const savingPercent = costCount('savingPercent');
    const incomeAmount = costCount ('totalIncome');
    const expensesText = getInnerText('totalExpenses');
    const expensesAmount = parseFloat(expensesText);
    const savingAmount = (savingPercent / 100) * incomeAmount;
    document.getElementById('savingArea').innerText = savingAmount;

    const restBalance = document.getElementById('balance').innerText;
    
    // error message for saving balance
    if(savingAmount > restBalance){
        alert("Your saving amount is greater than your balance");
    };
    const remainingBalance = incomeAmount - (savingAmount + expensesAmount);
    document.getElementById('remainingBalanceArea').innerText = remainingBalance;
});