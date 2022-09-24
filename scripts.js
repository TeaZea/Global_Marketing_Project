

// Show image taggs in output
let btnChecked = document.querySelector('#S1');

btnChecked.addEventListener('change', (event) => {
    document.querySelector('#output').innerHTML = 'S1';
});



// Clear output
let btnReset = document.querySelector('#reset');

btnReset.addEventListener('click', (event) => {
    document.querySelector('#output').innerHTML = '';
});




// tagging.addEventListener("change", checktag);

// function checktag() {
//     if (tagging.S1.checked) {
//         output.innerHTML = tagging.S1.value;
//     } else {
//         output.innerHTML = '';
//     }
// };


// function showOutput() {
//     if (document.getElementById('S1').checked) {
//       document.getElementById('S1').innerHTML = "S1";
//     } else {
//       document.getElementById('S1').innerHTML = "";
//     }
//   }



