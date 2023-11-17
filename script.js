// DESCARGAR CATÁLOGO DE PRODUCTOS
document.getElementById("descarga-catalogo").addEventListener("click", function() {
    var enlace = document.createElement("a");
    enlace.href = "pdfs/catalogoProMed.pdf";
    enlace.download = "catalogoProMed.pdf";
    enlace.click();
});
  

var descargarLink = document.getElementById("descarga-catalogo");

descargarLink.addEventListener("mouseover", function() {
  descargarLink.style.color = "orange"; // Cambio de color al posar el mouse
  descargarLink.style.textDecoration = "underline"; // Subrayado al posar el mouse
});

descargarLink.addEventListener("mouseout", function() {
  descargarLink.style.color = "#064f83"; // Restaurar el color original al quitar el mouse
  descargarLink.style.textDecoration = "none"; // Quitar el subrayado al quitar el mouse
});

// CUENTA REGRESIVA A EVENTOS

function cuentaRegresiva(fechaString, idElemento) {
  var fechaEventoDate = new Date(fechaString).getTime();

  var x = setInterval(function(){
    
    var fechaHoyDate = new Date().getTime();

    var diferenciaFechas = fechaEventoDate - fechaHoyDate

    var dias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenciaFechas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenciaFechas % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenciaFechas % (1000 * 60)) / 1000);
  
    
  
    if(diferenciaFechas < 0){
      clearInterval(x);
    } else{
      document.getElementById(idElemento).innerHTML = "El evento comienza en: <br>" + dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
    }

  }, 1000);
}

// cuenta regresiva 1
var fechaEvento1 = "Jan 8, 2024 11:00:00"
var idElementoEvento1 = "countdown1"
cuentaRegresiva(fechaEvento1, idElementoEvento1);

// cuenta regresiva 2
var fechaEvento2 = "Jan 10 2024 11:00:00"
var idElementoEvento2 = "countdown2"
cuentaRegresiva(fechaEvento2, idElementoEvento2);

// cuenta regresiva 2
var fechaEvento3 = "Feb 1, 2024 11:00:00"
var idElementoEvento3 = "countdown3"
cuentaRegresiva(fechaEvento3, idElementoEvento3);



