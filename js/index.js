const greeting = document.querySelector('#greeting');
greeting.innerHTML = 'Welcome to Weekend Countdown!';

const goBtn = document.querySelector('#go-btn');

const date = new Date();

getDayName = () => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  return date.toLocaleDateString('en-EN', { weekday: 'long' });
}

goBtn.onclick = () => {
  const userName = document.querySelector('#username');
  const promptQuestion = document.querySelector('#prompt-question');

  promptQuestion.innerHTML = `Hello ${userName.value}. Today is ${getDayName()}. Only ${5 - date.getDay()} days left until weekend!`;

};
