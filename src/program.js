var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tombol = /** @class */ (function () {
    function Tombol(id, onklik) {
        this.id = id;
        this.onklik = this.onklik;
    }
    Tombol.prototype.tampil = function () {
        return " <button onclick=\"" + this.onklik + "\"> " + this.id + " </button> ";
    };
    return Tombol;
}());
var Tombolbantu = /** @class */ (function (_super) {
    __extends(Tombolbantu, _super);
    function Tombolbantu(id, onklik) {
        return _super.call(this, id, onklik) || this;
    }
    Tombolbantu.prototype.menujulink = function () {
        return "<input type=\"button\" onclick=\"location.href='bantuan.html';\" value=\"Bantuan Cari buku\" class=\"btn btn-outline-primary my-4 mx-2\" />";
    };
    return Tombolbantu;
}(Tombol));
var Tombolbuku = /** @class */ (function (_super) {
    __extends(Tombolbuku, _super);
    function Tombolbuku(id, onklik, _linkbuku) {
        var _this = _super.call(this, id, onklik) || this;
        _this._linkbuku = _linkbuku;
        return _this;
    }
    Tombolbuku.prototype.tombol = function () {
        return "<button type=\"button\" class=\"btn btn-outline-primary btn-sm\" name=\"button\" id=\"b1\"><a href=\"" + this._linkbuku + ".html\">baca</a></button>";
    };
    return Tombolbuku;
}(Tombol));
var Baca = /** @class */ (function () {
    function Baca(totbaca) {
        this.arraybaca = [];
        this.totbaca = totbaca;
    }
    Baca.prototype.membaca = function () {
        var a = 1;
        var i = 0;
        for (i = 0; i < this.arraybaca.length; i++) {
            a = this.arraybaca[i] + a;
        }
        this.totbaca = a;
    };
    return Baca;
}());
var Bantuan = new Tombolbantu('bantuan', 'bantuan()');
var b1 = new Tombolbuku('b1', 'b1()', 'YouHadMe');
var b2 = new Tombolbuku('b2', 'b2()', 'With Julian');
var b3 = new Tombolbuku('b3', 'b3()', 'Winter');
var b4 = new Tombolbuku('b4', 'b4()', 'weding');
var b5 = new Tombolbuku('b5', 'b5()', 'dilan1990');
var b6 = new Tombolbuku('b6', 'b6()', 'dilan1991');
var b7 = new Tombolbuku('b7', 'b7()', 'PEMBUNUHAN');
var b8 = new Tombolbuku('b8', 'b8()', 'LAPANGAN');
var b9 = new Tombolbuku('b9', 'b9()', 'death');
var b10 = new Tombolbuku('b10', 'b10()', 'kosong');
var b11 = new Tombolbuku('b11', 'b11()', 'Teror');
var b12 = new Tombolbuku('b12', 'b12()', '#');
var b13 = new Tombolbuku('b13', 'b13()', 'Dua Cinta');
var b14 = new Tombolbuku('b14', 'b14()', 'Apapun Selain');
var b15 = new Tombolbuku('b15', 'b15()', 'ABinCa');
var b16 = new Tombolbuku('b16', 'b16()', 'Negri');
var b17 = new Tombolbuku('b17', 'b17()', 'Pemimpi');
var b18 = new Tombolbuku('b18', 'b18()', '#');
document.getElementById("bantuan").innerHTML = Bantuan.menujulink();
document.getElementById("b1").innerHTML = b1.tombol();
document.getElementById("b2").innerHTML = b2.tombol();
document.getElementById("b3").innerHTML = b3.tombol();
document.getElementById("b4").innerHTML = b4.tombol();
document.getElementById("b5").innerHTML = b5.tombol();
document.getElementById("b6").innerHTML = b6.tombol();
document.getElementById("b7").innerHTML = b7.tombol();
document.getElementById("b8").innerHTML = b8.tombol();
document.getElementById("b9").innerHTML = b9.tombol();
document.getElementById("b10").innerHTML = b10.tombol();
document.getElementById("b11").innerHTML = b11.tombol();
document.getElementById("b12").innerHTML = b12.tombol();
document.getElementById("b13").innerHTML = b13.tombol();
document.getElementById("b14").innerHTML = b14.tombol();
document.getElementById("b15").innerHTML = b15.tombol();
document.getElementById("b16").innerHTML = b16.tombol();
document.getElementById("b17").innerHTML = b17.tombol();
document.getElementById("b18").innerHTML = b18.tombol();
