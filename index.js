const userAction = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const myJson = await response.json(); //extract JSON from the http response

  return myJson.slip.advice;
};

const getAdvice = () => {
  userAction().then((myJson) => console.log(myJson));
};
