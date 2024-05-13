let currentExp = "";

const expInput = document.getElementById("expression");
const resInput = document.getElementById("result");

const handleClick = (el) => {
  currentExp += el.innerText;
  expInput.value = currentExp;

  try {
    resInput.value = String(eval(currentExp));
  } catch (e) {
    resInput.value = "Invalid expression!";
    // if (e instanceof SyntaxError) {
    // }
  }
};

const reset = () => {
  //   console.log("clearing");
  currentExp = "";
  expInput.value = "";
  resInput.value = "ANS";
};

const removeLastChar = () => {
  currentExp = currentExp.slice(0, currentExp.length - 1);
  expInput.value = currentExp;

  try {
    resInput.value =
      eval(currentExp) == undefined ? "ANS" : String(eval(currentExp));
  } catch (e) {
    resInput.value = "Invalid expression!";
    // if (e instanceof SyntaxError) {
    // }
  }
};
