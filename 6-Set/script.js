const sayilar = new Set([1,2,3,4,5]);


const sayibas = (x) => {
    console.log(x);
}

sayilar.add(5);

const dizi = [...sayilar]; // listeyi diziye çevirdik

sayibas(sayilar);
sayibas(dizi);

sayibas(sayilar.has(5)); //var

sayibas(sayilar.keys()); // iterator >>>   keys = values

for(let x of sayilar.values()){

    console.log(x);
}

/// key value için map yapısı daha önemli 
//   lakin array için ise set yapısı da gayet güzel.