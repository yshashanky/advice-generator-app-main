let count = 0;

const userAction = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const myJson = await response.json();
  return myJson.slip.advice;
};

const getAdvice = () => {
  count = count + 1;
  document.getElementById("count").innerHTML = count;
  userAction().then(
    (myJson) => (document.getElementById("quote").innerHTML = myJson)
  );
};

window.onload = function () {
  var reloading = (document.getElementById("quote").innerHTML =
    "Please wait for the advice!!");
  if (reloading) {
    getAdvice();
  }
};
