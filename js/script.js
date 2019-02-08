let result = 0;


//cached DOM elements
let btns = document.querySelectorAll('#btnPlus, #btnMinus');
let resultDisplay = document.getElementById('result');

//Event Listeners
btns.forEach(function(btn){
    btn.addEventListener('click',op);
});

//functions
function op(evt){
    let input = document.getElementById('numToAdd');
    let inputNumber = parseInt(input.value,10);
    result = evt.target.id === 'btnPlus'?inputNumber + parseInt(resultDisplay.textContent,10):parseInt(resultDisplay.textContent,10)-inputNumber;
    result < 0? resultDisplay.style.color = 'red': resultDisplay.style.color = 'black';
    resultDisplay.textContent = result;

}
