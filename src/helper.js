export const formatNumber = (number) => {
  const [wholeNumbers, decimals] = number.toString().split(".");
  const numberLength = wholeNumbers.length;

  let formatedNumber = "";
  let seperatorCounter = 3;

  if (!wholeNumbers) {
    formatedNumber = "0";
  } else if (numberLength > 3) {
    for (let i = numberLength - 1; i >= 0; i--) {
      if (seperatorCounter === 1 && i > 0) {
        formatedNumber = `,${wholeNumbers[i]}` + formatedNumber;
        seperatorCounter = 3;
      } else {
        formatedNumber = wholeNumbers[i] + formatedNumber;
        seperatorCounter--;
      }
    }
  } else {
    formatedNumber += wholeNumbers;
  }

  if (decimals) {
    if (decimals.length === 1) {
      formatedNumber += `.${decimals}0`;
    } else {
      formatedNumber += `.${decimals}`;
    }
  } 

  return formatedNumber;
};
