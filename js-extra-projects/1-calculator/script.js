// =============================
// Business Logic
// =============================

function cleanOperationString(operationsStr) {
  var operations = operationsStr
    .split(/(\+|\-|\/|\*)/)
    .filter(function filterOutEmptyStrings(element) {
      // This will happen when the multiple operators are side by side
      return element != "";
    });

  return operations;
}

function validateOperation(operations) {
  var operators = ["+", "-", "/", "*"];
  var isValid = true;

  if (operations.length < 3) return false;
  // Check if the first and last elements are not operators
  if (operators.includes(operations[0]) || operators.includes(operations[-1])) {
    return false;
  }

  operations.map(function validateOperators(element, idx) {
    var isEven = idx % 2 == 0;
    // Check if number is valid
    if (isEven && isNaN(element)) isValid = false;
    // Check if operator is valid
    if (!isEven && !operators.includes(element)) isValid = false;
  });

  return isValid;
}

function evaluateOperations(operations) {
  return eval(operations.join(""));

  // Algorithm to solve operations for "*" and "/" with operator precedence
  var solvedOperations = [];
  var skipNext = false;
  operations.map(function evaluateOperation(element, idx) {
    if (element == "*" || element == "/") {
      let prev = solvedOperations.pop();
      let next = operations[idx + 1];
      let result = null;
      if (element == "*") result = Number(prev) * Number(next);
      else result = Number(prev) / Number(next);
      skipNext = true;
      solvedOperations.push(result);
      console.log(solvedOperations);
    } else {
      if (!skipNext) solvedOperations.push(element);
      else skipNext = false;
    }
  });
  return eval(solvedOperations.join(""));
}

// =============================
// Listeners
// =============================

function addNumEventListener(btn) {
  btn.addEventListener("click", function addListener() {
    // Check if the last character is an operator
    var input = getInput();
    if (input == "Invalid Operation") {
      renderInput(btn.textContent);
      return;
    }

    var operators = ["+", "-", "/", "*"];
    if (operators.includes(input.slice(-1))) {
      // If it is an operator, add the number after it
      renderInput(input + btn.textContent);
    } else {
      // If it is a number, replace it
      if (input.length == 1) {
        renderInput(btn.textContent);
      } else {
        renderInput(input + btn.textContent);
      }
    }
  });
}

function addOperatorEventListener(btn) {
  btn.addEventListener("click", function addListener() {
    var input = getInput();
    if (input == "Invalid Operation") {
      renderInput(btn.textContent);
      return;
    }

    var operators = ["+", "-", "/", "*"];
    if (operators.includes(input.slice(-1))) {
      // If it is an operator, replace it
      renderInput(input.slice(0, -1) + btn.textContent);
    } else {
      // If it is a number, add the operator after it
      renderInput(input + btn.textContent);
    }
  });
}

function addEvaluateEventListener(btn) {
  btn.addEventListener("click", function addListener() {
    var input = getInput();
    var operations = cleanOperationString(input);
    if (validateOperation(operations)) {
      var result = evaluateOperations(operations);
      renderInput(result);
    } else {
      renderInput("Invalid Operation");
    }
  });
}

// =============================
// Render elements
// =============================

(function renderBtns() {
  var container = document.querySelector(".btns");
  var btns = [
    { value: "7", type: "NUM" },
    { value: "8", type: "NUM" },
    { value: "9", type: "NUM" },
    { value: "/", type: "OP" },
    { value: "4", type: "NUM" },
    { value: "5", type: "NUM" },
    { value: "6", type: "NUM" },
    { value: "*", type: "OP" },
    { value: "1", type: "NUM" },
    { value: "2", type: "NUM" },
    { value: "3", type: "NUM" },
    { value: "-", type: "OP" },
    { value: "0", type: "NUM" },
    { value: ".", type: "NUM" },
    { value: "=", type: "EQ" },
    { value: "+", type: "OP" },
  ];

  btns.map(function renderBtn(btn) {
    var btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.classList.add(btn.type.toLowerCase());
    btnEl.textContent = btn.value;
    btnEl.type = "button";
    container.appendChild(btnEl);

    if (btn.type == "NUM") addNumEventListener(btnEl);
    else if (btn.type == "OP") addOperatorEventListener(btnEl);
    else if (btn.type == "EQ") addEvaluateEventListener(btnEl);
  });
})();

function getInput() {
  var input = document.querySelector(".input");
  return input.value;
}

function renderInput(value) {
  var input = document.querySelector(".input");
  input.value = value;
}
