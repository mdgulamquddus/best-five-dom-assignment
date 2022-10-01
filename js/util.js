function getInputValue(inputId) {
  const getElementInputId = document.getElementById(inputId);
  const elementInputValue = getElementInputId.value;
  const elementValue = parseInt(elementInputValue);
  return elementValue;
}

function getInnerValue(innerTextId) {
  const getInnerTextId = document.getElementById(innerTextId);
  const innerTextValue = getInnerTextId.innerText;
  const textValue = parseInt(innerTextValue);
  return textValue;
}
