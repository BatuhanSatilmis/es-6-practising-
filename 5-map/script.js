
const ogrenciler = new Map(); //constractr olusturdk
const date = new Date;

ogrenciler.set(1,"batu");
ogrenciler.set(2,"satu");
ogrenciler.set("aysun","kiz");

let user = {"isim" : "batuhan"};

ogrenciler.set(user,"satilmis");

console.log(ogrenciler.get(1));
console.log(ogrenciler.get("aysun"));

let sonuc;
sonuc = ogrenciler.size;
sonuc = ogrenciler.has("aysun"); // --> true
// ogrenciler.delete(1);
// ogrenciler.clear();
console.log(sonuc);
console.log(ogrenciler);

for(let x of ogrenciler.keys()){

    console.log(x);
}
for(let x of ogrenciler.values()){

    console.log(x);
}
for(let [key,value] of ogrenciler.entries()){

    console.log(key,value);
}