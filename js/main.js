"use strict"

const row = document.querySelector('div.row');

for (let i = 0; i < 100; i++){
    
    setTimeout(() => {

    let x = i + 1;

    if(x % 3 === 0 && x % 5 === 0){
        const element = `<div class="col-10 bg-FizzBuzz">FizzBuzz</div>`;
        row.innerHTML += element;
    }
    else if(x % 3 === 0){
        const element = `<div class="col-10 bg-fizz">Fizz</div>`;
        row.innerHTML += element;
    }else if(x % 5 === 0){
        const element = `<div class="col-10 bg-buzz">Buzz</div>`;
        row.innerHTML += element;
    }else{
        const element = `<div class="col-10 bg-number">${x}</div>`;
        row.innerHTML += element;
    }

    }, 1000);
}