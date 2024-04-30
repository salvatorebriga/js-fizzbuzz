"use strict"

for (let i = 0; i < 100; i++){

    let x = i + 1;

    if(x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz');
    }
    else if(x % 3 === 0){
        console.log('Fizz');
    }else if(x % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(x);
    }
}