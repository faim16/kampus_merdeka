<body bgcolor="yellow">
    
</body>
<script > 
class gempa {
    //member1 & 2 : variabel dan konstruktor
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
       
    }
    //member3 fungsi2
    dampak(gempa){
    if(this.skala == 0 && this.skala <=2) gempa = "dampak tidak terasa";
    else if(this.skala == 3 && this.skala <=4)gempa = "bangunan retak";
    else if(this.skala == 3 && this.skala <=4)gempa = "bangunan retak";
    else if(this.skala >=6)gempa = "bangunan roboh";
    else gempa ="tidak ada "

    }
   
    mencetak() {
        document.write(
        `lokasi Gempa : ${this.lokasi}
        <br/>skala Gempa: ${this.skala}
        <br/>dampak Gempa: ${this.gempa}<hr/>`)
    }
}
 //---------------ciptakan object------------------
    let indonesia = new gempa('Indonesia', 2);
    let china = new gempa('china', 6);
    let filipina = new gempa('filipina', 8);
    let kongo = new gempa('kongo', 6);
    let india = new gempa('india', 8);
    let mesir = new gempa('mesir', 2);
    let italia = new gempa('italia', 6);
    let ceko = new gempa('ceko', 8);
    let holand = new gempa('holand', 6);
    let arab = new gempa('arab', 8);
    india.mencetak();
    kongo.mencetak();
    indonesia.mencetak();
    filipina.mencetak();
    arab.mencetak();
    mesir.mencetak();
    italia.mencetak();
    ceko.mencetak();
    holand.mencetak();
    china.mencetak();
</script>
