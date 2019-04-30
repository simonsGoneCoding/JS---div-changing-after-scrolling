document.body.style.height = '10000px'; //setting size of a page to enable srcoll

const divItem = document.createElement('div');
document.body.appendChild(divItem);
let size = 10;

divItem.style.width = "100%";
divItem.style.position = "fixed";
divItem.style.left = "0";
divItem.style.top = "0";
divItem.style.height = size + "px";
divItem.style.backgroundColor = "green";

let grow = true;

const changeHeight = function () {
  if (size >= window.innerHeight / 2) {
    // grow = false
    grow = !grow;
  } else if (size <= 0) {
    // grow = true
    grow = !grow;
  }

  if (grow == true) {
    size += 5;
    divItem.style.backgroundColor = "green";
  } else {
    size -= 5;
    divItem.style.backgroundColor = "red";
  }
  divItem.style.height = size + "px";

}

window.addEventListener('scroll', changeHeight)