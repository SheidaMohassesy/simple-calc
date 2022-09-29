function addition() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const resultElement = document.getElementById('result');
    if (num1Element.value === '' || num2Element.value === '') {
        alert ('Something went wrong!');
    }
    else {
        resultElement.value = Number(num1Element.value) + Number(num2Element.value);
    }
}

function subtraction() {
   const num1Element = document.getElementById('num1');
   const num2Element = document.getElementById('num2');
   const resultElement = document.getElementById('result');
   if (num1Element.value === '' || num2Element.value === '') {
        alert ('Something went wrong!');
   }
   else {
        resultElement.value = Number(num1Element.value) - Number(num2Element.value);
   }
}

function multiplication() {
   const num1Element = document.getElementById('num1');
   const num2Element = document.getElementById ('num2');
   const resultElement = document.getElementById ('result');
   if (num1Element.value === '' || num2Element.value === '') {
        alert ('Something went wrong!');
    }
    else {
        resultElement.value = Number(num1Element.value) * Number(num2Element.value);
    }
}

function division() {
  const num1Element = document.getElementById('num1');
  const num2Element = document.getElementById('num2');
  const resultElement = document.getElementById('result');
  if (num1Element.value === '' || num2Element.value === '') {
        alert ('Something went wrong!');
    }
    else {
        resultElement.value = Number(num1Element.value) / Number(num2Element.value);
    }
}
