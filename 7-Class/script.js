
function Kisi(ad,meslek,dogumYili){
   this.ad = ad;
   this.meslek = meslek;
   this.dogumYili = dogumYili;
}
const tarih = new Date().getFullYear();

Kisi.prototype.yashesapla = function() {
    return tarih - this.dogumYili;
}

let emre = new Kisi("emre Yagci","yagcilik",2005);
let ahmet = new Kisi("ahmet","ogrenci",2006);

// console.log(emre.yashesapla() , "ES 5");
// console.log(ahmet , "ES 5");

class es6 { 
    constructor(ad,meslek,dogumYili) {
        this.ad = ad;
        this.meslek = meslek;
        this.dogumYili = dogumYili;
     //   console.log("nesne olusturuldu");
    }
    yashesapla() {
        return tarih - this.dogumYili;
    }
//getr-setr
    get ad(){
          return this._ad;
    }
    set ad(value){
        if(value.length < 3){
           this.value = "Random";
        }
        
        this._ad = value;
    }

    get dogumYili(){
          return this._dogumYili;
    }

    set dogumYili(value){
         if(value < 1900 || value > tarih){
            console.log("yas yanlis baba");
            return
         }
          this._dogumYili = value;
    }

}

let kisi1 = new es6("d","yagcilik",2025);
let kisi2 = new es6("batu Yagci","yagcilik",2001);
let kisi3 = new es6("ilhan Yagci","yagcilik",2001);

console.log(kisi1);
console.log(kisi1.ad);
console.log(kisi1.yashesapla());

