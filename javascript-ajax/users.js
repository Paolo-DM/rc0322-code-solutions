var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  xhr.response.forEach(user => {
    var $li = document.createElement('li');
    $li.textContent = user.name;
    $userList.appendChild($li);
  });
});
xhr.send();

/*
for (var user of xhr.response) {
    var $li = document.createElement('li');
    $li.textContent = user.name;
    $userList.appendChild($li);
  }
*/
