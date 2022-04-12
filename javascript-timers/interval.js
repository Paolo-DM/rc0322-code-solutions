var $countdownDisplay = document.querySelector('.countdown-display');
var startValue = parseInt($countdownDisplay.textContent);

function countdown() {
  startValue--;
  $countdownDisplay.textContent = startValue;

  if (startValue === 0) {
    clearInterval(intervalID);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

var intervalID = setInterval(countdown, 1000);
