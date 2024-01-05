const datePickerElement = document.querySelector("#dateOfBirth");
const btnElement = document.querySelector("#calculate__age");
const pElement = document.querySelector("#age__value");

const calculateAge = () => {
  const value = datePickerElement.value;

  if (!value) {
    alert("Please select the date.");
    return;
  }

  const birth = new Date(value);
  const now = new Date();
  const diff = new Date(now.valueOf() - birth.valueOf());
  const age = Math.abs(diff.getFullYear() - 1970);
  pElement.textContent = `You're ${age} year's old.`;
};

btnElement.addEventListener("click", calculateAge);
