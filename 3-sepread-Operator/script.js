const sayilar1  = [1,3,5,7];
const sayilar2 = [8,9];
const msj = ["benim","adim","batuhan"];

console.log(msj);
console.log(...msj); //string olarak geldi spread operator.

console.log(sayilar1.concat(sayilar2)); // topladi.

sayilaryanyana  = [...sayilar1 , ...sayilar2];
const sayilar3  = [sayilar1 , sayilar2];
console.log(sayilaryanyana);  // spread operator kullaninca oldu.

sayilar4 = sayilar2;



// console.log(sayilar4);
// console.log(sayilar2); // 2 objeyi eşitledi bunu istemeyiz o yüzden spread 

sayilar4 = [...sayilar2];

sayilar4[0] = 1111;

console.log( "sayilar 4 boyle : "+ sayilar4 +"sayilar 2 boyle : " + sayilar2);


var toplam = (...argument) =>{

    let toplam = 0;

    for(let i in argument){
        toplam+= argument[i];
    }

    return toplam;
    
}

console.log(toplam(1,3,5));
console.log(toplam(1,3,5,7));
console.log(toplam(1,3,5));