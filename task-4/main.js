function isSearch(list, find) {
  for (var item of list) {
    if (item === find) {
      return true;
    }
  }
  return false;
}

function count(str, listSearch) {
  var obj = {};

  var word = "";

  for (var char of str) {
    var isExcludeSumbol =
      char === "," || char === "." || char.charCodeAt() === 32;
    var isFinded = isSearch(listSearch, word);

    if (isFinded && obj[word]) {
      obj[word]++;
    }

    if (isFinded && !obj[word]) {
      obj[word] = 1;
    }

    if (isFinded || isExcludeSumbol) {
      word = "";
    }

    if (!isExcludeSumbol) {
      word += char;
    }
  }
  return obj;
}

function renderHtml(objWords, containerName) {
  var container = document.querySelector(containerName);

  var html = "";
  for (var i in objWords) {
    html += `<p>${i}: ${objWords[i]}</p>`;
  }
  container.innerHTML = html;
}

function init() {
  var userMessage = prompt("Enter data str");
  var userListWords = prompt("Enter search words");
  var objWords = count(userMessage, userListWords.split(","));
  renderHtml(objWords, "#container");
}

init();
