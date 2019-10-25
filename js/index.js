const greeting = document.querySelector('#greeting');
greeting.innerHTML = 'Welcome to Weekend Countdown!';
const goBtn = document.querySelector('#go-btn');

getDayName = () => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  return date.toLocaleDateString('en-EN', { weekday: 'long' });
}

getDaysToWeekend = () => {
  // Date Global Object
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date();
  const userName = document.querySelector('#username');
  const promptQuestion = document.querySelector('#prompt-question');

  promptQuestion.innerHTML = `Hello ${userName.value}. Today is ${getDayName()}. Only ${5 - date.getDay()} days left until weekend!`;

};

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
goBtn.addEventListener("click", getDaysToWeekend);