var $modal = document.querySelector('.modal');
var $btnCloseModal = document.querySelector('.close-modal');
var $openModalBtn = document.querySelector('.open-modal-btn');

$openModalBtn.addEventListener('click', function () {
  $modal.classList.remove('hidden');
});

$btnCloseModal.addEventListener('click', function () {
  $modal.classList.add('hidden');
});
