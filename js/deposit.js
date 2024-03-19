document.getElementById('btn-deposit').addEventListener('click', function () {
  const newDepositTotal = getInputFieldValue('deposit-field');
  const previousDepositTotal = getElementValue('deposit-amount');
  const depositTotal = previousDepositTotal + newDepositTotal;

  const balanceTotal = getElementValue('balance-total');
  const newBalance = balanceTotal + newDepositTotal;

  setValue('deposit-amount', depositTotal)
  setValue('balance-total', newBalance)
})
