document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawTotal = getInputFieldValue('withdraw-field');
  const previousWithdrawTotal = getElementValue('withdraw-amount');
  const depositTotal = previousWithdrawTotal + newWithdrawTotal;

  const balanceTotal = getElementValue('balance-total');
  const newBalance = balanceTotal - newWithdrawTotal;

  setValue('withdraw-amount', depositTotal);
  setValue('balance-total', newBalance);
})