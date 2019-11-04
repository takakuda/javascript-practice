
function outherFunc() {
  let x = 2;
  return function () {
    return x++;
  }
}

let func = outerFunc();
func();

