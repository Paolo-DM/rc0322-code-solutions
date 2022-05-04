let count = 3;
const intervalID = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    clearInterval(intervalID);
    console.log('Blast off!');
  }
}
, 1000);
