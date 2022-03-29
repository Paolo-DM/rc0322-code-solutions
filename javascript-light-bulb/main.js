var $circle = document.querySelector('.circle');
var $container = document.querySelector('.container');
var off = true;

$circle.addEventListener('click', function () {
  if (off) {
    $circle.className = 'circle turn-off';
    $container.className = 'container turn-off';
    off = false;
  } else {
    $circle.className = 'circle turn-on';
    $container.className = 'container turn-on';
    off = true;
  }

});
