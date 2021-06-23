function sayHello(){
    let myName = prompt('What is your name?');
    let span = document.querySelector('span');
span.textContent = myName;
}

let button = document.querySelector('button');
button.onclick(sayHello());