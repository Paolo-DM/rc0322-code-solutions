var clicksNum = 0;
var $hotBtn = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', function () {
  clicksNum++;

  $clickCount.textContent = `Clicks: ${clicksNum}`;
  if (clicksNum > 0 && clicksNum < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (clicksNum >= 4 && clicksNum < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (clicksNum >= 7 && clicksNum < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (clicksNum >= 10 && clicksNum < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (clicksNum >= 13 && clicksNum < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
});
