function getInputFieldValue(filedId){
  const inputField = document.getElementById(filedId);
  const inputFieldValueString = inputField.value;
  const newInputFieldAmountTotal = parseFloat(inputFieldValueString);
  console.log(newInputFieldAmountTotal);
  inputField.value = '';
  return newInputFieldAmountTotal;
 }
 
 function getElementValue(elementId){
   const getOutputElement = document.getElementById(elementId);
   const previousAmountString = getOutputElement.innerText;
   const previousAmountTotal = parseFloat(previousAmountString);
   console.log(previousAmountTotal);
   return previousAmountTotal;
 }
 
 function setValue(filedId,total){
   const field = document.getElementById(filedId);
   field.innerText = total;
 }