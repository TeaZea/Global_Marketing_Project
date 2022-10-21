let btnOutput = document.querySelector('button');
let output =  document.querySelector('h1');

btnOutput.addEventListener('click', () => {
    let checkbox = docuement.querySelector('input[type="checkbox"]:checked');
    output.innerText = checkbox.value;
});

