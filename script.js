function add(num) {
  arr = num.split('+').map(function (item) {
    return parseInt(item)
  });
  return arr[0] + arr[1];

}
//
function minus(num) {
  console.log('minus');
  arr = num.split('-').map(function (item) {
    return parseInt(item);
  });
  return arr[0] - arr[1];

}

function divide(num) {
  console.log('divide');
  arr = num.split('/').map(function (item) {
    return parseInt(item);
  });
  return arr[0] / arr[1];

}

function multiply(num) {
  console.log('multiply');
  arr = num.split('*').map(function (item) {
    return parseInt(item);
  });
  return arr[0] * arr[1];

}




let inNum = '';

function updateButton(e) {
  inNum += e.target.innerText;
  
  if (e.target.id === 'clear') {
    inNum = '';
    console.log('radha rahda')

  }

  if (inNum.endsWith('=')) {
    inNum = inNum.slice(0, -1);


    if (inNum.includes('+')) {
      result = add(inNum);

    }
    else if (inNum.includes('-')) {
      result = minus(inNum);

    }
    else if (inNum.includes('/')) {
      result = divide(inNum);

    }
    else if (inNum.includes('*')) {
      result = multiply(inNum);
    }

    inNum = result;

  }
  screen.textContent = inNum;

}




const buttons = document.querySelectorAll('button')
const screen= document.querySelector(".screen");

buttons.forEach((btn) => {
  btn.addEventListener("click", updateButton);
});