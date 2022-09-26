let urun = {
    "marka" : "apple",
    "model" : "iphone13",
    "fiyat" : 111111
}
let {marka,model,fiyat=0,satisDurumu=false,sahiplik="ilk sahibi",yasi=`yaşı 30`} = urun;

urungoster = (obj) =>{

    let {marka,model,fiyat=0,satisDurumu=false} = obj;
    console.log(marka,model,fiyat,satisDurumu);
  
}

urungoster(urun);

console.log(sahiplik,yasi);