var $leftArrow = document.querySelector('.left-arrow');
var $rightArrow = document.querySelector('.right-arrow');
var $image = document.querySelector('.image');
var $progressDots = document.querySelectorAll('.dot');
var $dotsContainer = document.querySelector('.progress-dots');

var images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
var curSlide = 0;
var maxSlide = images.length - 1;
var intervalId = setInterval(goNextImg, 3000);

$dotsContainer.addEventListener('click', function (event) {
  if (event.target.nodeName === 'BUTTON') {
    curSlide = parseInt(event.target.getAttribute('id'));
    selectDot(curSlide);
    renderImage(curSlide);
  }
});

$rightArrow.addEventListener('click', goNextImg);
$leftArrow.addEventListener('click', goPreviousImg);

function selectDot(id) {
  for (var i = 0; i < $progressDots.length; i++) {
    $progressDots[i].className = 'dot';
  }
  $progressDots[id].classList.toggle('selected');
  pauseResumeInterval();
}

function renderImage(id) {
  $image.setAttribute('src', images[id]);
}

function goNextImg() {
  if (curSlide === maxSlide) {
    renderImage(0);
    curSlide = 0;
    selectDot(0);
  } else {
    curSlide++;
    renderImage(curSlide);
    selectDot(curSlide);
  }
}

function goPreviousImg() {
  if (curSlide === 0) {
    renderImage(maxSlide);
    curSlide = maxSlide;
    selectDot(curSlide);
  } else {
    curSlide--;
    renderImage(curSlide);
    selectDot(curSlide);
  }
}

function pauseResumeInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(goNextImg, 3000);
}
