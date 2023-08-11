const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//   function moveDodgerRight() {
//     const leftNumbers = dodger.style.right.replace("px", "");
//     const right = parseInt(leftNumbers, 179);
  
//     if (right > 179) {
//       dodger.style.right = `${left + 1}px`;
//     }
//   }

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if ( left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }