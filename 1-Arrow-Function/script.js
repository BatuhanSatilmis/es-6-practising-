//before arrowfunction -> ES 5
normalfunction = function(mesaj){
    return mesaj;
}
console.log(normalfunction("without arrow function ES-5"));

//light function -> ES 5
function lightfunction(mesaj){
console.log(mesaj);
}
lightfunction("light function ES5");

const arrowfunction = (mesaj) => { return mesaj; }

console.log(arrowfunction("hello world with ES6 Arrow Function"));

const toplama = (a,b) => {
     return a+b ;
}

console.log(`ES6 ile toplama : ${toplama(3,5)}`);