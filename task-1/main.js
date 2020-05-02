// Anna,Peter,Alex/<p><b>$</b></p>

function getData(str) {
  var strList = "";
  var strPattern = "";
  var isDel = false;

  for (var char of str) {
    if (isDel === false && char !== "/") {
      strList += char;
    }

    if (isDel) {
      strPattern += char;
      continue;
    }

    if (char === "/") {
      isDel = true;
    }
  }

  return {
    pattern: strPattern,
    list: strList.split(","),
  };
}

function replaceStr(str, find, to) {
  var result = "";
  for (char of str) {
    if (char === find) {
      result += to;
      continue;
    } else {
      result += char;
    }
  }
  return result;
}

function getHtmlStr(list, pattern) {
  var html = "";
  for (item of list) {
    html += replaceStr(pattern, "$", item);
  }
  return html;
}

function renderHtml(html, containerName) {
  var container = document.querySelector(containerName);
  container.innerHTML = html;
}

function init() {
  var userMessage = prompt("Enter data str list items/pattern");
  var data = getData(userMessage);
  var html = getHtmlStr(data.list, data.pattern);
  renderHtml(html, "#container");
}

init();
