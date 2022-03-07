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
