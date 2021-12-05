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

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  X: (x, y) => x * y,
  "/": Math.round((x, y) => x / y),
};

const handleClickDigits = ({ target }) => {
  $total.innerText = target.innerText;

  if (initialState.acc === 0) {
    initialState.acc = Number(target.innerText);
    return;
  }

  initialState.current = Number(target.innerText);

  return;
};

const handleClickOperations = ({ target }) => {
  if (["/", "X", "-", "+"].includes(target.innerText)) {
    initialState.operator = target.innerText;

    return;
  }

  if (
    target.innerText === "=" &&
    initialState.current &&
    initialState.operator
  ) {
    initialState.acc = operators[initialState.operator](
      initialState.acc,
      initialState.current
    );

    $total.innerText = initialState.acc;
  }
};

const handleClickResetCalculator = () => {
  $total.innerText = 0;
  initialState.acc = 0;
  initialState.current = 0;
  initialState.operator = "";

  return;
};

$digits.addEventListener("click", handleClickDigits);
$operations.addEventListener("click", handleClickOperations);
$modifier.addEventListener("click", handleClickResetCalculator);
