// let btnOutput = document.querySelector('button');
// let output =  document.querySelector('h1');

// btnOutput.addEventListener('click', () => {
//     let checkbox = docuement.querySelector('input[type="checkbox"]:checked');
//     output.innerText = checkbox.value;
// });



function changeText(){
    const userInputFurniture = Array(document.querySelectorAll(".furniture:checked")).map(function(el) {
            return el.value;
        }).join(' ')
    

    document.getElementById('submit').innerHTML = userInputFurniture;
    return false;
    }