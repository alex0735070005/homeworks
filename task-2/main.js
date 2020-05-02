function format(str) {
  var res = "";
  var isStartNumber = false;

  for (var i in str) {
    var char = str[i];
    var code = char.charCodeAt();

    var isNumber = code >= 48 && code <= 57;

    if (isNumber && !isStartNumber) {
      isStartNumber = true;
      res += `<b>${char}`;
      continue;
    }

    if (!isNumber && isStartNumber) {
      isStartNumber = false;
      res += `${char}</b>`;
    }

    if (code >= 65 && code <= 90) {
      res += `<p>${char}`;
      continue;
    }

    if (char === ".") {
      res += `${char}</p>`;
      continue;
    }

    res += char;
  }
  return res;
}

function renderHtml(html, containerName) {
  var container = document.querySelector(containerName);
  container.innerHTML = html;
}

function init() {
  var userMessage = prompt("Enter data str to be formated");
  var formatedStr = format(userMessage);
  renderHtml(formatedStr, "#container");
}

init();
