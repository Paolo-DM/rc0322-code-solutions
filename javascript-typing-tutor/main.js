var $spanElements = document.querySelectorAll('span');
var $accuracy = document.querySelector('.accuracy');
var i = 0;
var accuracy = 0;

document.addEventListener('keydown', checkInput);

function checkInput(event) {
  if (i === $spanElements.length) {
    return;
  }

  if (($spanElements[i].innerHTML === '&nbsp;' && event.key === ' ') ||
    $spanElements[i].textContent === event.key) {
    $spanElements[i].className = 'correct';
    i++;
    accuracy++;
    if (i !== $spanElements.length) {
      $spanElements[i].className = 'current';
    }
  } else {
    $spanElements[i].className = 'current wrong';
    accuracy--;
  }

  var percentageAccuracy = percentage(accuracy, $spanElements.length);
  if (percentageAccuracy < 35) {
    $accuracy.className = 'accuracy low';
  } else if (percentageAccuracy < 65) {
    $accuracy.className = 'accuracy mid';
  } else {
    $accuracy.className = 'accuracy high';
  }

  $accuracy.textContent = (percentageAccuracy + '%');
}

function percentage(partialValue, totalValue) {
  return ((100 * partialValue) / totalValue).toFixed(2);
}
