window.onload = iniciar;


function iniciar(){
//boton encriptar escucha el click
    var btnEncriptado=document.getElementById("btnEncriptado");
    btnEncriptado.onclick=clickBtnEncriptar;  

//boton desencriptar escucha el click
    var btnDesencriptar=document.getElementById ("btnDesencritado");
    btnDesencriptar.addEventListener("click", clickBtnDesencriptar);
//boton copiar
    const btn=document.getElementById("btnCopiar");
    btn.onclick=clickBtnCopiar;   
    
    }
    
function clickBtnDesencriptar(){
    var tDesencriptado= document.getElementById("textInicial").value.toLowerCase();

    var texEncriptado=tDesencriptado.replace(/enter/img,"e" );//va a ser en enter

    var texEncriptado=texEncriptado.replace(/ober/img,"o");//cuanto encuentre ober , que coloque la o
    var texEncriptado=texEncriptado.replace(/imes/img,"i");
    var texEncriptado=texEncriptado.replace(/ai/img,"a");
    var texEncriptado=texEncriptado.replace(/ufat/img,"u");

    document.getElementById("textFinal").innerHTML=texEncriptado;

    document.getElementById("btnCopiar").style.display="show";
    document.getElementById("btnCopiar").style.display="inherit";//para que aparesca el boton cuando le de click en el boton encrptar
   
    document.getElementById("imagen2").style.display="none";//cuando yo toque el boton me desaparece la imagen
    document.getElementById("NoMensaje").style.display="none";
    document.getElementById("2Texto").style.display="none";

}

function clickBtnEncriptar(){
    var tDesencriptado= document.getElementById("textInicial").value.toLowerCase();

    var texEncriptado=tDesencriptado.replace(/e/img,"e");//va a ser en enter

    var texEncriptado=texEncriptado.replace(/o/img,"ober");//cuanto encuentre ober , que coloque la o
    var texEncriptado=texEncriptado.replace(/i/img,"imes");
    var texEncriptado=texEncriptado.replace(/a/img,"ai");
    var texEncriptado=texEncriptado.replace(/u/img,"ufat");

    document.getElementById("textFinal").innerHTML=texEncriptado;
    
    document.getElementById("btnCopiar").style.display="show";
    document.getElementById("btnCopiar").style.display="inherit";//para que aparesca el boton cuando le de click en el boton encrptar
   
    document.getElementById("imagen2").style.display="none";//cuando yo toque el boton me desaparece la imagen
    document.getElementById("NoMensaje").style.display="none";
    document.getElementById("2Texto").style.display="none";

}

function clickBtnCopiar(){
   /*const textFinal=document.getElementById("textFinal");
    textFinal.select();
    document.execCommand("copy"); */


    const textFinal=document.getElementById("textFinal");
    textFinal.select();
    textFinal.setSelectionRange(0,99999);

    
    navigator.clipboard.writeText(textFinal.value);
    alert("texto copiado"+textFinal.value );



}




