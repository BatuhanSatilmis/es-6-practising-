const sayilar = [1,5,7,3,2,11,13,15,8];
var toplam = 0;
for(let i in sayilar){
    toplam += sayilar[i];
}
//console.log(toplam);

const teksayiarray = [];

let teksayifunction = () => {

    for(let i in sayilar){
         if(sayilar[i] % 2 == 1) { 
           
              teksayiarray.push(sayilar[i]);
          }
       
          console.log(teksayiarray);  
    }
}
console.log(teksayifunction());



const teksayilar = sayilar.filter((sayi) => sayi %2 == 1);

console.log( "Tek sayilar "+ " " + teksayilar);

const urunler = [
    {"urunAdi" : "iphone 11" , "fiyat" : 15000},
    {"urunAdi" : "iphone 9" , "fiyat" : 11000},
    {"urunAdi" : "iphone 12" , "fiyat" : 10000},
    {"urunAdi" : "iphone 13" , "fiyat" : 15000}
]

//  const urunjson = urun => {
   
//     if(urun.fiyat > 14000){
//            return urun.fiyat;
//    }
   
  
//  }
//let sonuc = urunler.filter(urunjson).map(urun => urun.urunAdi);

 let sonuc = urunler.filter(urun => urun.fiyat > 14000).map(urun => urun.urunAdi);
// let sonuc = urunler.find(urun => urun.fiyat > 14000); -> bulunan ilk degeri getirdi
  // sonuc = urunler.findIndex(urun => urun.fiyat > 14000); 

 console.log(sonuc);