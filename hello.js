const viewScreen = document.getElementById('answer');
const firstInput = document.getElementById('input1');
const secondInput = document.getElementById('input2');
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const btnMultiply = document.getElementById('multiply');
const btnDivision = document.getElementById('division');
const btnClear = document.getElementById('All-clear');

btnPlus.addEventListener('click', function(){
    let firstCount = firstInput.value;
    let secondCount = secondInput.value;
    let newFirstcount = parseInt(firstCount);
    let newSecondcount = parseInt(secondCount);
    let addition = newFirstcount + newSecondcount;
    

    viewScreen.innerText = addition;
});

btnMinus.addEventListener('click', function(){
    let firstCount = firstInput.value;
    let secondCount = secondInput.value
    let newFirstcount = parseInt(firstCount);
    let newSecondcount = parseInt(secondCount);
    let substraction = newFirstcount - newSecondcount;

    viewScreen.innerText = substraction;
})

btnMultiply.addEventListener('click', function(){
    let firstCount = firstInput.value;
    let secondCount = secondInput.value;
    let newFirstcount = parseInt(firstCount);
    let newSecondcount = parseInt(secondCount);
    let multiply = newFirstcount * newSecondcount;

    viewScreen.innerText = multiply;
})

btnDivision.addEventListener('click', function(){
    let firstCount = firstInput.value;
    let secondCount = secondInput.value;
    let newFirstcount = parseInt(firstCount);
    let newSecondcount = parseInt(secondCount);
    let devision = newFirstcount / newSecondcount;

    viewScreen.innerText = devision;
    
})

btnClear.addEventListener('click', function(){
    viewScreen.innerText = 0;
    firstInput.value = '';
    secondInput.value = '';
})




