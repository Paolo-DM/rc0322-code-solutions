/* exported titleCase */
function titleCase(title) {
  var lowerCase = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var words = title.toLowerCase().split(' ');

  function capitalizeFirstChar(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function capitalizeCharAfterDash(word) {
    var afterDashIndex = word.indexOf('-') + 1;
    return word.charAt(0).toUpperCase() + word.slice(1, afterDashIndex) +
      word.charAt(afterDashIndex).toUpperCase() + word.slice(afterDashIndex + 1);
  }

  var wordsCapitalized = words.map((el, i) => {
    if (el.includes('javascript')) {
      return el.replace('javascript', 'JavaScript');
    } else if (el === 'api') {
      return 'API';
    }
    if (el.includes('-')) {
      return capitalizeCharAfterDash(el);
    }
    if (lowerCase.includes(el) && i > 0 && !(words[i - 1].includes(':'))) {
      return el;
    }
    return capitalizeFirstChar(el);
  });
  return wordsCapitalized.join(' ');
}
