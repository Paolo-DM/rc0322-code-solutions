var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (const tab of $tabs) {
      if (tab === event.target) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    var $views = document.querySelectorAll('.view');

    for (const view of $views) {
      if (view.getAttribute('data-view') !== dataView) {
        view.className = 'view hidden';
      } else {
        view.classList.remove('hidden');
      }
    }
  }
});
