class Tombol {
    public id : string;
    public onklik : string;
    public padding : string;
    

    constructor(id : string, onklik : string){
        this.id = id
        this.onklik = this.onklik
    }
    tampil(){
        return ` <button onclick="${this.onklik}"> ${this.id} </button> `
    }
}
class Tombolbantu extends Tombol{
    public href : string;
    constructor(id : string, onklik : string){
        super(id, onklik);
    }
    menujulink(){
        return `<input type="button" onclick="location.href='bantuan.html';" value="Bantuan Cari buku" class="btn btn-outline-primary my-4 mx-2" />`
    }
}
class Tombolbuku extends Tombol {
 _linkbuku : string;
    constructor(id : string, onklik : string, _linkbuku : string ){
        super(id, onklik);
        this._linkbuku = _linkbuku;
    }
    tombol(){
        return `<button type="button" class="btn btn-outline-primary btn-sm" name="button" id="b1"><a href="${this._linkbuku}.html">baca</a></button>`

    }
}


class Baca {
    public arraybaca : Array<any>
    public i : any
    public totbaca : number
    constructor (totbaca :number) {
        this.arraybaca = [];
        this.totbaca = totbaca;
    }
    membaca(){
        let a = 1 ;
        let i = 0 ;
        for(i = 0;i < this.arraybaca.length; i++ ){
            a =this.arraybaca[i] + a ;
        }
        this.totbaca = a ;
    }
}
let Bantuan = new Tombolbantu('bantuan', 'bantuan()');

let b1 = new Tombolbuku('b1','b1()','YouHadMe');
let b2 = new Tombolbuku('b2','b2()','With Julian');
let b3 = new Tombolbuku('b3','b3()','Winter');
let b4 = new Tombolbuku('b4','b4()','weding');
let b5 = new Tombolbuku('b5','b5()','dilan1990');
let b6 = new Tombolbuku('b6','b6()','dilan1991');
let b7 = new Tombolbuku('b7','b7()','PEMBUNUHAN');
let b8 = new Tombolbuku('b8','b8()','LAPANGAN');
let b9 = new Tombolbuku('b9','b9()','death');
let b10 = new Tombolbuku('b10','b10()','kosong');
let b11 = new Tombolbuku('b11','b11()','Teror');
let b12 = new Tombolbuku('b12','b12()','#');
let b13 = new Tombolbuku('b13','b13()','Dua Cinta');
let b14 = new Tombolbuku('b14','b14()','Apapun Selain');
let b15 = new Tombolbuku('b15','b15()','ABinCa');
let b16 = new Tombolbuku('b16','b16()','Negri');
let b17 = new Tombolbuku('b17','b17()','Pemimpi');
let b18 = new Tombolbuku('b18','b18()','#');

document.getElementById("bantuan").innerHTML = Bantuan.menujulink();
document.getElementById("b1").innerHTML=b1.tombol();
document.getElementById("b2").innerHTML=b2.tombol();
document.getElementById("b3").innerHTML=b3.tombol();
document.getElementById("b4").innerHTML=b4.tombol();
document.getElementById("b5").innerHTML=b5.tombol();
document.getElementById("b6").innerHTML=b6.tombol();
document.getElementById("b7").innerHTML=b7.tombol();
document.getElementById("b8").innerHTML=b8.tombol();
document.getElementById("b9").innerHTML=b9.tombol();
document.getElementById("b10").innerHTML=b10.tombol();
document.getElementById("b11").innerHTML=b11.tombol();
document.getElementById("b12").innerHTML=b12.tombol();
document.getElementById("b13").innerHTML=b13.tombol();
document.getElementById("b14").innerHTML=b14.tombol();
document.getElementById("b15").innerHTML=b15.tombol();
document.getElementById("b16").innerHTML=b16.tombol();
document.getElementById("b17").innerHTML=b17.tombol();
document.getElementById("b18").innerHTML=b18.tombol();
