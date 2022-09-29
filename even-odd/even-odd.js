function evenOrOdd(){
    const numberElement = document.getElementById('number');
    const statusElement = document.getElementById('status');


    if(numberElement.value === ''){
        alert('please enter the number');
        return;
    }

    const amount = Number(numberElement.value);



    if (amount % 2 === 0) {
        statusElement.value = 'Even';
    }
    else {
        statusElement.value = 'Odd';
    }
}