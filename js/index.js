var greeting = document.querySelector('#greeting');
greeting.innerHTML = 'Welcome to Weekend Countdown!';

var goBtn = document.querySelector('#go-btn');

goBtn.onclick = function () {
  var userName = document.querySelector('#username');
  var promptQuestion = document.querySelector('#prompt-question');

  promptQuestion.innerHTML = `Hello ${userName.value}. Today is ${
    getDayName()[0]
    }. Only ${getDayName()[1]} days left until weekend!`;

  function getDayName() {
    var days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    var date = new Date();
    var day = date.getDay();
    return [days[day - 1], 5 - day];
  }
};
