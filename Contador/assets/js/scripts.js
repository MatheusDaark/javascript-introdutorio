const CURRENT_NUMBER = document.getElementById('currentNumber');
const INC_BUTTON = document.getElementById('increment');
const DEC_BUTTON = document.getElementById('decrement');
let count = 0;

INC_BUTTON.addEventListener('click', function() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
  if (count === 10) {
    INC_BUTTON.disabled = true;
  } else if (count > 0) {
    DEC_BUTTON.disabled = false;
  }
});

DEC_BUTTON.addEventListener('click', function() {
  count--;
  CURRENT_NUMBER.innerHTML = count;
  if (count === 0) {
    DEC_BUTTON.disabled = true;
  } else if (count < 10) {
    INC_BUTTON.disabled = false;
  }
});
