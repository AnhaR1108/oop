class InputPertanyaan{
        private name : string;
        private value : string;
        private idHtml : string;
        private pertanyaan : string;
        private valueInput : boolean;
    
        constructor(pertanyaan:string, name: string, idHTML: string, value: string){
            this.pertanyaan = pertanyaan
            this.name = name
            this.idHtml = idHTML;
            this.name = name;
            this.value = value
        }
    
        tampil(){
            return `<label><b>${this.pertanyaan}</b></label><br>
                    <input type="radio" name="${this.name}" id="${this.idHtml}" value="${this.value}"> Ya
                    <input type="radio" name="${this.name}" id="tidak" value="null"> Tidak
                    `
        }
    
        public getValue(){
            let booleanChoice = (<HTMLInputElement>document.getElementById(this.idHtml)).checked
            if(booleanChoice){
                this.valueInput = true
                return this.valueInput
            }else{
                this.valueInput = false
                return this.valueInput
            }
        }
}

class Rekomendasi{
    public lisBuku : Array<any>;
    public tanyapertama : boolean;
    public tanyakedua : boolean;
    public tanyaketiga : boolean;
    public tanyakeempat : boolean;
    public tanyakelima : boolean;
    public namarekomendasibuku : string;
    public urlGambar : string;
    public arraybantuan : Array<any>
 
    
    constructor(){
        this.lisBuku = []
        this.arraybantuan = []
    }

    getValue(){
        this.tanyapertama = pertanyaanpertamaRadio.getValue();
        this.tanyakedua = pertanyaankeduaRadio.getValue();
        this.tanyaketiga = pertanyaanketigaRadio.getValue();
        this.tanyakeempat = pertanyaankeempatRadio.getValue();
        this.tanyakelima = pertanyaankelima.getValue();
    }

    getRekomendasi(){
        this.getValue()
        let lisBuku = rekomendasi.lisBuku
        for(let i=0;i<lisBuku.length;i++){
            if((lisBuku[i].pertama === this.tanyapertama) && (lisBuku[i].kedua === this.tanyakedua) && 
                (lisBuku[i].ketiga === this.tanyaketiga) && (lisBuku[i].keempat === this.tanyakeempat) && 
                (lisBuku[i].kelima === this.tanyakelima)){
                    this.arraybantuan.push(lisBuku[i])    
                }
        }
        let tampil = ""
        let rekomendasiArray = this.arraybantuan
        for(let i=0;i<rekomendasiArray.length;i++){
            tampil += `<br><label>${rekomendasiArray[i].nama}</label><br><br>
                        <img src="gambar/${rekomendasiArray[i].linkGambar}" width="200px" height="200px" border="2px"><br>`
        }
        document.getElementById("rekomendasi").innerHTML = tampil
        this.arraybantuan = []
        return tampil
    }
    
}

class Menu{
    protected nama: string;
    public linkGambar: string;
    public pertama : boolean;
    public kedua : boolean;
    public ketiga : boolean;
    public keempat : boolean;
    public kelima : boolean;

    constructor(nama : string, linkGambar: string, pertama : boolean, kedua : boolean, ketiga : boolean, keempat : boolean ,kelima :boolean){
        this.nama = nama;
        this.linkGambar = linkGambar;
        this.pertama = pertama;
        this.kedua = kedua;
        this.ketiga = ketiga;
        this.keempat = keempat;
        this.kelima = kelima;
    }


    tampil(){
        return `<img src="gambar/${this.linkGambar}" width="200px" height="200px" border="2px"><br>
                <label style="font-size: 25px;">${this.nama}</label>`

    };

}

// class ButtonLink {
//     public id : string;
//     public functionOnClick : string;
//     public padding : string;
    

//     constructor(id : string, functionOnClick : string, padding: string){
//         this.id = id
//         this.padding = padding
//         this.functionOnClick = functionOnClick
//     }
//     tampil(){
//         return `<input type="button" onclick="location.href='menu.html';" value="Go To Menu" style='padding:${this.padding}px;'/>`
//     }
// }

// //Deklarasi Button
// let buttonMenu = new ButtonLink("buttonMenu", "", "15")

//Deklarasi Pertanyaan
let pertanyaanpertamaRadio = new InputPertanyaan("Apakah Anda Menyukai buku dengan jumlah halaman yang panjang??", 
                                            "mengandungpertama", "qstpertama", "pertama")
let pertanyaankeduaRadio = new InputPertanyaan("Apakah Anda Menyukai buku dengan cerita ahir yang bagus", 
                                            "mengandungkedua", "qstkedua", "kedua")
let pertanyaanketigaRadio = new InputPertanyaan("Apakah Anda Menyukai buku yang menyeramkan?", 
                                            "mengandungketiga", "qstketiga", "ketiga")
let pertanyaankeempatRadio = new InputPertanyaan("Apakah Anda menyukai cerita percintaan ?", 
                                            "mengandungkeempat", "qstkeempat", "keempat")
let pertanyaankelima = new InputPertanyaan("Apakah Anda menyukai cerita yang lucu ?", 
                                            "mengandungkelima", "qstkelima", "kelima")

//Penampilan
document.getElementById("a").innerHTML = pertanyaanpertamaRadio.tampil();
document.getElementById("b").innerHTML = pertanyaankeduaRadio.tampil();
document.getElementById("c").innerHTML = pertanyaanketigaRadio.tampil();
document.getElementById("d").innerHTML = pertanyaankeempatRadio.tampil();
document.getElementById("e").innerHTML = pertanyaankelima.tampil();
// document.getElementById("buttonMenu").innerHTML = buttonMenu.tampil()

//Deklarasi Rekomendasi
let rekomendasi = new Rekomendasi();


//Sweet Treats
let youhadme = new Menu("youhadme", "youhadme.jpg", false, true, false,true,false);
let withjulian = new Menu("withjulian", "withjulian.jpg", false, true, false,true,true);
let winter = new Menu("winter", "winter.jpg", true, true, false,true,false);
let donat = new Menu("weding", "weding.jpg", true, true, false,true,false);
let dilan1990 = new Menu("dilan1990", "dilan1990.jpg", true,false,false,true,false);
let dilan1991 = new Menu("dilan1991", "dilan1991.jpg",false, false, false,true,false);
let pembunuhan = new Menu("pembunuhan", "pembunuhan.jpg",false, true, true,false,false);
let lapangan = new Menu("lapangan", "lapangan.jpg", false, false, true,false,true);
let death = new Menu("death", "death.jpg", true,false,true,true,false);
let kosong = new Menu("kosong", "kosong.jpg", true, false, true,false,false);
let teror = new Menu("teror", "teror.jpg", true, false, true,false,true);
let duacinta = new Menu("duacinta", "duacinta.png", false, false, false,true,true);
let apapun = new Menu("apapun", "apapun.png", true, false, false,true,true);
let abinca = new Menu("abinca", "abinca.png", true, true, false,false,true);
let negri5M = new Menu("negri5M", "negri5.jpg",false, true, false,false,true);

rekomendasi.lisBuku.push(youhadme, withjulian, winter, donat, dilan1990, dilan1991, pembunuhan,
    lapangan, death, kosong, teror, duacinta, apapun, abinca, 
    negri5M);

function TampilkanRekomendasi(){
    rekomendasi.getRekomendasi();
}


