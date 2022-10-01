function getInputValue(inputId) {
  const getSinglePlayerInputId = document.getElementById(inputId);
  const singlePlayerInputValue = getSinglePlayerInputId.value;
  const singlePlayerValue = parseInt(singlePlayerInputValue);
  return singlePlayerValue;
}

function getInnerValue(innerTextId) {
  const fivePlayerExpenseId = document.getElementById(innerTextId);
  const fivePlayerInnerText = fivePlayerExpenseId.innerText;
  const fivePlayerValue = parseInt(fivePlayerInnerText);
  return fivePlayerValue;
}
