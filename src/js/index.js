const $calculator = document.querySelector(".calculator");
const $total = document.querySelector("#total");

const initialState = {
  acc: 0,
  current: 0,
  operator: "",
};

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  X: (x, y) => x * y,
  "/": (x, y) => x / y,
};

const keyListener = ({ target }) => {
  if (target.classList.contains("digit")) {
    $total.innerText = target.innerText;

    if (initialState.acc === 0) {
      initialState.acc = Number(target.innerText);
      return;
    }

    initialState.current = Number(target.innerText);

    return;
  }

  if (target.classList.contains("operation")) {
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
  }

  if (target.classList.contains("modifier")) {
    $total.innerText = 0;
    initialState.acc = 0;
    initialState.current = 0;
    initialState.operator = "";
    console.log(initialState);

    return;
  }
};

$calculator.addEventListener("click", keyListener);
