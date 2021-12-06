const $calculator = document.querySelector(".calculator");
const $total = document.querySelector("#total");

const $digits = document.querySelector(".digits");
const $operations = document.querySelector(".operations");
const $modifier = document.querySelector(".modifier");

const initialState = {
  acc: 0,
  current: 0,
  operator: "",
};

const calculatorState = JSON.parse(JSON.stringify(initialState));

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  X: (x, y) => x * y,
  "/": Math.round((x, y) => x / y),
};

const handleClickDigits = ({ target }) => {
  $total.innerText = target.innerText;

  if (calculatorState.acc === 0) {
    calculatorState.acc = Number(target.innerText);
    return;
  }

  calculatorState.current = Number(target.innerText);
};

const handleClickOperations = ({ target }) => {
  if (["/", "X", "-", "+"].includes(target.innerText)) {
    calculatorState.operator = target.innerText;

    return;
  }

  if (
    target.innerText === "=" &&
    calculatorState.current &&
    calculatorState.operator
  ) {
    calculatorState.acc = operators[calculatorState.operator](
      calculatorState.acc,
      calculatorState.current
    );

    $total.innerText = calculatorState.acc;
  }
};

const handleClickResetCalculator = () => {
  $total.innerText = 0;
  calculatorState.acc = initialState.acc;
  calculatorState.current = initialState.current;
  calculatorState.operator = initialState.operator;

  return;
};

$digits.addEventListener("click", handleClickDigits);
$operations.addEventListener("click", handleClickOperations);
$modifier.addEventListener("click", handleClickResetCalculator);
