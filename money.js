    const incomeTotalElement = document.getElementById('income-field').value; 
    const incomeTotal = parseInt(incomeTotalElement);
    const savingPercentage = parseInt(document.getElementById('percentage-field').value);

document.getElementById('save-btn').addEventListener('click', function (){
    const totalSaving = saving(incomeTotal, savingPercentage);
    const saveButtons = document.getElementById('save-field');
    saveButtons.innerText= totalSaving;
})   

document.getElementById('calculate-btn').addEventListener('click', function(){
    const rentCost = parseInt(document.getElementById('rent-field').value);
    const foodCost = parseInt(document.getElementById('food-field').value);
    const clothCost = parseInt(document.getElementById('cloth-field').value);
    const totalCost = totalExpense(rentCost, clothCost, foodCost);
    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalCost;
    
    
    const remainingBalanceAf = remainingBalance(incomeTotal, totalCost);
    console.log(incomeTotal, totalCost)
    
    const remainingBalanceElement = document.getElementById('remain-balance');
    remainingBalanceElement.innerText = remainingBalanceAf;
   
})

function totalExpense (e1, e2, e3){
    const totalExpense = e1 + e2 + e3;
    return totalExpense;
}
function remainingBalance (e1, e2){
    const remainingBalance = e1 - e2;
    return remainingBalance;
}
function saving(income, percentage){
    const saving = income * (percentage / 100);
    return saving;
}
