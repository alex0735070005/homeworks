function format(str) {
  var res = "";

  for (var char of str) {
    var code = char.charCodeAt();

    var isNumber = code >= 48 && code <= 57;
    var isLetter = code >= 65 && code <= 122;
    var isSpace = code === 32;

    if (char === "." || char === "," || isLetter || isNumber || isSpace) {
      res += char;
    }
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
