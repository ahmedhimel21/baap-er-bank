document.getElementById('btn-deposit').addEventListener('click', function(){
  const depositField = document.getElementById('deposit-field');
  const depositValue = depositField.value;
  const currentDepositAmount = parseFloat(depositValue);
  
  const depositElement = document.getElementById('deposit-amount');
  const previousDepositAmount = parseFloat(depositElement.innerText);

  depositElement.innerText = previousDepositAmount + currentDepositAmount;

  const previousBalanceTotalEle = document.getElementById('balance-total');
  const previousBalanceTotal = parseFloat(previousBalanceTotalEle.innerText);

  previousBalanceTotalEle.innerText = previousBalanceTotal + currentDepositAmount;

  depositField.value = '';
})