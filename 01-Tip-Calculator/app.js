const billAmountElement = document.querySelector("#billAmount");
const tipPercentageElement = document.querySelector("#tipPercentage");
const totalAmountElement = document.querySelector("#total__amount");
const btnElement = document.querySelector("#calculate__total");

const resetValues = () => {
  billAmountElement.value = "";
  tipPercentageElement.value = "";
  totalAmountElement.textContent = "";
};

const calculateTotalAmount = () => {
  const billValue = +billAmountElement.value;
  const tipValue = +tipPercentageElement.value;

  if (billValue < 0 || tipValue < 0) {
    alert("Please enter the values greater than 0");
    resetValues();
    return;
  }

  const tipAmount = billValue * (tipValue / 100);
  const totalAmount = billValue + tipAmount;
  totalAmountElement.textContent = `Total: ${totalAmount}`;
};

btnElement.addEventListener("click", calculateTotalAmount);
