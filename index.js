let count = 0;

const getAdvice = () => {
  userAction();
};

const userAction = async () => {
  count = count + 1;
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const myJson = await response.json();
    document.getElementById("count").innerHTML = count;
    document.getElementById("quote").innerHTML = myJson.slip.advice;
    return 1;
  } catch (err) {
    count = count - 1;
    document.getElementById("count").innerHTML = count;
    document.getElementById("quote").innerHTML = "Please try after sometime!!";
  }
};

window.onload = function () {
  var reloading = (document.getElementById("quote").innerHTML =
    "Please wait for the advice!!");
  document.getElementById("count").innerHTML = 1;
  if (reloading) {
    userAction();
  }
};
