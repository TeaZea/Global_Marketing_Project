

// Show image taggs in output
let btnCalidon = document.querySelector('#Calidon');

btnCalidon.addEventListener('change', (event) => {
    document.querySelector('#output').innerHTML = 'Calidon ';
});

let btnPrimacare = document.querySelector('#Primacare™ Wingback');

btnPrimacare.addEventListener('change', (event) => {
    document.querySelector('#output').innerHTML = 'Primacare™ Wingback ';
});

let btnAubra = document.querySelector('#Aubra');

btnAubra.addEventListener('change', (event) => {
    document.querySelector('#output').innerHTML = 'Aubra ';
});

let btnFrolick = document.querySelector('#Frolick');

btnFrolick.addEventListener('change', (event) => {
    document.querySelector('#output').innerHTML = 'Frolick ';
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



