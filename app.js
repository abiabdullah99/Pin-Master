function getpin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log("got 3 digit and calling age",pin);
    return getpin();
  }
}

function generatePin() {
  const pin = getpin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  const calcuInput = document.getElementById("type-numbers");
  if (isNaN(numbers)) {
    if (numbers == "C") {
      calcuInput.value = "";
    }
  } else {
    const previousCalu = calcuInput.value;
    const newCalu = previousCalu + numbers;
    calcuInput.value = newCalu;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typeNumbers = document.getElementById("type-numbers").value;
  const sucessNotification = document.getElementById("notify-success");
  const failNotification = document.getElementById("notify-fail");
  if (pin == typeNumbers) {
    failNotification.style.display = "none";
    sucessNotification.style.display = "block";
  } else {
    failNotification.style.display = "block";
    sucessNotification.style.display = "none";
  }
}
