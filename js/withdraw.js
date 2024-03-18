document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const withdrawAmount = withdrawField.value;
  const currentWithdrawAmount = parseFloat(withdrawAmount);

  const withdrawELe = document.getElementById('withdraw-amount');
  const previousWithdrawAmount = parseFloat(withdrawELe.innerText)

  withdrawELe.innerText = previousWithdrawAmount + currentWithdrawAmount;

  const balanceEle = document.getElementById('balance-total');
  const previousBalanceTotal = parseFloat(balanceEle.innerText);

  balanceEle.innerText = previousBalanceTotal - currentWithdrawAmount;
  


  withdrawField.value = '';
})