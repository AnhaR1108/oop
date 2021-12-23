var InputPertanyaan = /** @class */ (function () {
    function InputPertanyaan(pertanyaan, name, idHTML, value) {
        this.pertanyaan = pertanyaan;
        this.name = name;
        this.idHtml = idHTML;
        this.name = name;
        this.value = value;
    }
    InputPertanyaan.prototype.tampil = function () {
        return "<label><b>" + this.pertanyaan + "</b></label><br>\n                    <input type=\"radio\" name=\"" + this.name + "\" id=\"" + this.idHtml + "\" value=\"" + this.value + "\"> Ya\n                    <input type=\"radio\" name=\"" + this.name + "\" id=\"tidak\" value=\"null\"> Tidak\n                    ";
    };
    InputPertanyaan.prototype.getValue = function () {
        var booleanChoice = document.getElementById(this.idHtml).checked;
        if (booleanChoice) {
            this.valueInput = true;
            return this.valueInput;
        }
        else {
            this.valueInput = false;
            return this.valueInput;
        }
    };
    return InputPertanyaan;
}());
var Rekomendasi = /** @class */ (function () {
    function Rekomendasi() {
        this.lisBuku = [];
        this.arraybantuan = [];
    }
    Rekomendasi.prototype.getValue = function () {
        this.tanyapertama = pertanyaanpertamaRadio.getValue();
        this.tanyakedua = pertanyaankeduaRadio.getValue();
        this.tanyaketiga = pertanyaanketigaRadio.getValue();
        this.tanyakeempat = pertanyaankeempatRadio.getValue();
        this.tanyakelima = pertanyaankelima.getValue();
    };
    Rekomendasi.prototype.getRekomendasi = function () {
        this.getValue();
        var lisBuku = rekomendasi.lisBuku;
        for (var i = 0; i < lisBuku.length; i++) {
            if ((lisBuku[i].pertama === this.tanyapertama) && (lisBuku[i].kedua === this.tanyakedua) &&
                (lisBuku[i].ketiga === this.tanyaketiga) && (lisBuku[i].keempat === this.tanyakeempat) &&
                (lisBuku[i].kelima === this.tanyakelima)) {
                this.arraybantuan.push(lisBuku[i]);
            }
        }
        var tampil = "";
        var rekomendasiArray = this.arraybantuan;
        for (var i = 0; i < rekomendasiArray.length; i++) {
            tampil += "<br><label>" + rekomendasiArray[i].nama + "</label><br><br>\n                        <img src=\"gambar/" + rekomendasiArray[i].linkGambar + "\" width=\"200px\" height=\"200px\" border=\"2px\"><br>";
        }
        document.getElementById("rekomendasi").innerHTML = tampil;
        this.arraybantuan = [];
        return tampil;
    };
    return Rekomendasi;
}());
var Menu = /** @class */ (function () {
    function Menu(nama, linkGambar, pertama, kedua, ketiga, keempat, kelima) {
        this.nama = nama;
        this.linkGambar = linkGambar;
        this.pertama = pertama;
        this.kedua = kedua;
        this.ketiga = ketiga;
        this.keempat = keempat;
        this.kelima = kelima;
    }
    Menu.prototype.tampil = function () {
        return "<img src=\"gambar/" + this.linkGambar + "\" width=\"200px\" height=\"200px\" border=\"2px\"><br>\n                <label style=\"font-size: 25px;\">" + this.nama + "</label>";
    };
    ;
    return Menu;
}());
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
var pertanyaanpertamaRadio = new InputPertanyaan("Apakah Anda Menyukai buku dengan jumlah halaman yang panjang??", "mengandungpertama", "qstpertama", "pertama");
var pertanyaankeduaRadio = new InputPertanyaan("Apakah Anda Menyukai buku dengan cerita ahir yang bagus", "mengandungkedua", "qstkedua", "kedua");
var pertanyaanketigaRadio = new InputPertanyaan("Apakah Anda Menyukai buku yang menyeramkan?", "mengandungketiga", "qstketiga", "ketiga");
var pertanyaankeempatRadio = new InputPertanyaan("Apakah Anda menyukai cerita percintaan ?", "mengandungkeempat", "qstkeempat", "keempat");
var pertanyaankelima = new InputPertanyaan("Apakah Anda menyukai cerita yang lucu ?", "mengandungkelima", "qstkelima", "kelima");
//Penampilan
document.getElementById("a").innerHTML = pertanyaanpertamaRadio.tampil();
document.getElementById("b").innerHTML = pertanyaankeduaRadio.tampil();
document.getElementById("c").innerHTML = pertanyaanketigaRadio.tampil();
document.getElementById("d").innerHTML = pertanyaankeempatRadio.tampil();
document.getElementById("e").innerHTML = pertanyaankelima.tampil();
// document.getElementById("buttonMenu").innerHTML = buttonMenu.tampil()
//Deklarasi Rekomendasi
var rekomendasi = new Rekomendasi();
//Sweet Treats
var youhadme = new Menu("youhadme", "youhadme.jpg", false, true, false, true, false);
var withjulian = new Menu("withjulian", "withjulian.jpg", false, true, false, true, true);
var winter = new Menu("winter", "winter.jpg", true, true, false, true, false);
var donat = new Menu("weding", "weding.jpg", true, true, false, true, false);
var dilan1990 = new Menu("dilan1990", "dilan1990.jpg", true, false, false, true, false);
var dilan1991 = new Menu("dilan1991", "dilan1991.jpg", false, false, false, true, false);
var pembunuhan = new Menu("pembunuhan", "pembunuhan.jpg", false, true, true, false, false);
var lapangan = new Menu("lapangan", "lapangan.jpg", false, false, true, false, true);
var death = new Menu("death", "death.jpg", true, false, true, true, false);
var kosong = new Menu("kosong", "kosong.jpg", true, false, true, false, false);
var teror = new Menu("teror", "teror.jpg", true, false, true, false, true);
var duacinta = new Menu("duacinta", "duacinta.png", false, false, false, true, true);
var apapun = new Menu("apapun", "apapun.png", true, false, false, true, true);
var abinca = new Menu("abinca", "abinca.png", true, true, false, false, true);
var negri5M = new Menu("negri5M", "negri5.jpg", false, true, false, false, true);
rekomendasi.lisBuku.push(youhadme, withjulian, winter, donat, dilan1990, dilan1991, pembunuhan, lapangan, death, kosong, teror, duacinta, apapun, abinca, negri5M);
function TampilkanRekomendasi() {
    rekomendasi.getRekomendasi();
}
