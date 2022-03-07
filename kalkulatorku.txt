<!--nama file calc.php-->
<!DOCTYPE>
<html>
<head>
 <title>Kalkulator</title>
 <style >
  .tombol{
   background-color: deepskyblue;
  }
  .tabel{
   background-color: gold;
   margin: 10px;
   padding: 10px;
  }
 </style>
</head>
<body>
 <form name="calculator" >
  
  <table style="background-color :aqua" class="tabel" >
   <caption>Kalkulatorku</caption>
   <tr>
    <td>Angka 1</td><td>:</td><td><input type="number" name="a1"></td>
   </tr>
   <tr>
    <td>Angka 2</td><td>:</td><td><input type="number" name="a2"></td>
   </tr>
   <tr>
    <td>Hasil</td><td>:</td><td><input type="number" name="hasil" disabled ></td>
   </tr>
   <tr>
    <td colspan="3" align="center">
     <input class="tombol" type="button" onclick="tambah()" value="  +  ">
     <input class="tombol" type="button" onclick="kurang()" value="  -  ">
     <input class="tombol" type="button" onclick="kali()" value="  *  ">
     <input class="tombol" type="button" onclick="bagi()" value="  /  ">
     <input class="tombol" type="button" onclick="akar()" value="  ^  ">
     <input type="button" name="batal" value="Batal" onclick="kosongAll()" />
    </td>
   </tr>
  </table>
 </form>
</body>
</html>
<script>
    function tambah(){
     var a1=parseFloat(document.calculator.a1.value);
     var a2=parseFloat(document.calculator.a2.value);
     var hasil= a1+a2;
     document.calculator.hasil.value=hasil;
    }
    function kurang(){
     var a1=parseFloat(document.calculator.a1.value);
     var a2=parseFloat(document.calculator.a2.value);
     var hasil= a1-a2;
     document.calculator.hasil.value=hasil;
    }
    function kali(){
     var a1=parseFloat(document.calculator.a1.value);
     var a2=parseFloat(document.calculator.a2.value);
     var hasil= a1*a2;
     document.calculator.hasil.value=hasil;
    }
    function bagi(){
     var a1=parseFloat(document.calculator.a1.value);
     var a2=parseFloat(document.calculator.a2.value);
     var hasil= a1/a2;
     document.calculator.hasil.value=hasil;
    }
    function akar(){
        var a1=parseFloat(document.calculator.a1.value);
        var a2=parseFloat(document.calculator.a2.value);
        var hasil= Math.pow(a1,a2);
        document.calculator.hasil.value=hasil;
       }
    function kosongAll(){
     var a1=parseFloat(document.calculator.a1.value="");
     var a2=parseFloat(document.calculator.a2.value="");
     var hasil= a1/a2;
     document.calculator.hasil.value="";
    }
</script>
