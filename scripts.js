// let btnOutput = document.querySelector('button');
// let output =  document.querySelector('h1');

// btnOutput.addEventListener('click', () => {
//     let checkbox = docuement.querySelector('input[type="checkbox"]:checked');
//     output.innerText = checkbox.value;
// });


// function changeText(){
//     const userInputFurniture = Array(document.querySelectorAll(".furniture:checked")).map(function(el) {
//             return el.value;
//         }).join(' ')
    

//     document.getElementById('submit').innerHTML = userInputFurniture;
//     return false;
//     }


// function printText() {
//     const str = document.getElementsByClassName("furniture");
//     const selectedTag = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].type === "checkbox" && str[i].checked === true) selectedTag += str[i].value + "\n";
//     }
//     alert(selectedTag);
// }

// function getText() {
//     let text = Array(document.querySelectorAll(".furniture"));
//     console.log(`${text}`);
// }

// function printText() {
//     let print = getText();
//     console.log(`${print}`);
// }

function GetSelected() {
    //Create an Array
    let output = [];

    //Reference the form
    const formFurniture = document.getElementById("formFurniture");

    //Reference all the CheckBoxes in form
    const chks = formFurniture.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            output.push(chks[i].value);
        }
    }

    //Display the values
    if (output.length > 0) {
        alert("Output values: " + output.join("   "));
    }
};

// 1. Creating an empty list
// 2. Create a function to add checked boxes values to the list - onload
// 3. Create a function that onclick then prints them to innerHTML <p> tag/alert.
