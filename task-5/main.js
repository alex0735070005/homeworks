function reverse(str) {
  var res = "";
  var len = str.length - 1;
  for (var i = len; i > -1; i--) {
    res += str[i];
  }
  return res;
}

function to10Convert(numberStr, top) {
  var len = numberStr.length;

  var str = reverse(numberStr);

  var res = 0;

  for (var i = 0; i < len; i++) {
    var n = +str[i];
    res += n * top ** i;
  }
  console.log(res);
}

to10Convert("110", 2);

function from10Convert(number, top) {
  var res = number;
  var toSustemValue = "";
  while (res < 1) {
    res = Math.floor(number / top);
    var isEven = !!(res % 2);
  }
}

from10Convert(6, 2);
