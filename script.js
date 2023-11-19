// DESCARGAR CATÁLOGO DE PRODUCTOS

var descargarLink = document.getElementById("descarga-catalogo");

function colorTextoClickeable(elementoTexto) {
  elementoTexto.addEventListener("mouseover", function() {
    elementoTexto.style.color = "orange"; // Cambio de color al posar el mouse
    elementoTexto.style.textDecoration = "underline"; // Subrayado al posar el mouse
  });
  
  elementoTexto.addEventListener("mouseout", function() {
    elementoTexto.style.color = "#064f83"; // Restaurar el color original al quitar el mouse
    elementoTexto.style.textDecoration = "none"; // Quitar el subrayado al quitar el mouse
  });
}

colorTextoClickeable(descargarLink);

descargarLink.addEventListener("click", function() {
  var enlace = document.createElement("a");
  enlace.href = "pdfs/catalogoProMed.pdf";
  enlace.download = "catalogoProMed.pdf";
  enlace.click();
});

// CUENTA REGRESIVA A CURSOS

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
      document.getElementById(idElemento).innerHTML = "El curso comienza en: <br>" + dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
    }

  }, 1000);
};

// cuenta regresiva 1
var fechaEvento1 = "Jan 8, 2024 11:00:00";
var idElementoEvento1 = "countdown1";
cuentaRegresiva(fechaEvento1, idElementoEvento1);

// cuenta regresiva 2
var fechaEvento2 = "Jan 10 2024 11:00:00";
var idElementoEvento2 = "countdown2";
cuentaRegresiva(fechaEvento2, idElementoEvento2);

// cuenta regresiva 2
var fechaEvento3 = "Feb 1, 2024 11:00:00";
var idElementoEvento3 = "countdown3";
cuentaRegresiva(fechaEvento3, idElementoEvento3);

// MODALES

function interaccionModal(ventana_modal, boton_abrir, boton_cerrar) {
  boton_abrir.addEventListener("click", () => {
    ventana_modal.showModal();
  });
  
  boton_cerrar.addEventListener("click", () => {
    ventana_modal.close();
  });
};

// Neurocirugia
var modal_neuro = document.getElementById("modal-neuro");
var abrir_neuro = document.getElementById("abrir-neuro");
var cerrar_neuro = document.getElementById("cerrar-neuro");

colorTextoClickeable(abrir_neuro);

interaccionModal(modal_neuro, abrir_neuro, cerrar_neuro);

// Traumatologia
var modal_trauma = document.getElementById("modal-trauma");
var abrir_trauma = document.getElementById("abrir-trauma");
var cerrar_trauma = document.getElementById("cerrar-trauma");

colorTextoClickeable(abrir_trauma);

interaccionModal(modal_trauma, abrir_trauma, cerrar_trauma);

// Gastroenterología
var modal_gastro = document.getElementById("modal-gastro");
var abrir_gastro = document.getElementById("abrir-gastro");
var cerrar_gastro = document.getElementById("cerrar-gastro");

colorTextoClickeable(abrir_gastro);

interaccionModal(modal_gastro, abrir_gastro, cerrar_gastro);

// Cardiología
var modal_cardio = document.getElementById("modal-cardio");
var abrir_cardio = document.getElementById("abrir-cardio");
var cerrar_cardio = document.getElementById("cerrar-cardio");

colorTextoClickeable(abrir_cardio);

interaccionModal(modal_cardio, abrir_cardio, cerrar_cardio);

// Diagnóstico por Imágenes
var modal_dxi = document.getElementById("modal-dxi");
var abrir_dxi = document.getElementById("abrir-dxi");
var cerrar_dxi = document.getElementById("cerrar-dxi");

colorTextoClickeable(abrir_dxi);

interaccionModal(modal_dxi, abrir_dxi, cerrar_dxi);

// Nefrología
var modal_nefro = document.getElementById("modal-nefro");
var abrir_nefro = document.getElementById("abrir-nefro");
var cerrar_nefro = document.getElementById("cerrar-nefro");

colorTextoClickeable(abrir_nefro);

interaccionModal(modal_nefro, abrir_nefro, cerrar_nefro);

// Oftalmología
var modal_oftalmo = document.getElementById("modal-oftalmo");
var abrir_oftalmo = document.getElementById("abrir-oftalmo");
var cerrar_oftalmo = document.getElementById("cerrar-oftalmo");

colorTextoClickeable(abrir_oftalmo);

interaccionModal(modal_oftalmo, abrir_oftalmo, cerrar_oftalmo);

// Odontología
var modal_odonto = document.getElementById("modal-odonto");
var abrir_odonto = document.getElementById("abrir-odonto");
var cerrar_odonto = document.getElementById("cerrar-odonto");

colorTextoClickeable(abrir_odonto);

interaccionModal(modal_odonto, abrir_odonto, cerrar_odonto);

// RESERVAR ENTRADAS

// Actualizar cantidad de entradas
function actualizarCantidad(boton_menos, boton_mas, cantidad_evento) {
  
  var cantidad = 1;

  boton_menos.addEventListener("click", function (){
    if (cantidad > 1) {
      cantidad--;
      cantidad_evento.textContent = cantidad;
    }
  }); 
  
  boton_mas.addEventListener("click", function (){
    cantidad++;
    cantidad_evento.textContent = cantidad;
  }); 

}

// Ventana modal para reserva de entradas
function interaccionModalEventos(ventana_modal, boton_abrir, boton_cerrar, boton_aceptar, nombre_evento, apellido_evento, email_evento, cantidad_evento, evento) {
  
  boton_abrir.addEventListener("click", () => {
    ventana_modal.showModal();
  });
  
  boton_cerrar.addEventListener("click", () => {
    ventana_modal.close();
    nombre_evento.value = '';
    apellido_evento.value = '';
    email_evento.value = '';
  });

  boton_aceptar.addEventListener("click", () => {
    nombre_evento.value = '';
    apellido_evento.value = '';
    email_evento.value = '';
    ventana_modal.close();
    ventana
  });
};

var boton_menos_1 = document.getElementById("boton-menos-1");
var boton_mas_1 = document.getElementById("boton-mas-1");
var cantidad_evento_1 = document.getElementById("cantidad-evento-1");
actualizarCantidad(boton_menos_1, boton_mas_1, cantidad_evento_1);

var boton_menos_2 = document.getElementById("boton-menos-2");
var boton_mas_2 = document.getElementById("boton-mas-2");
var cantidad_evento_2 = document.getElementById("cantidad-evento-2");
actualizarCantidad(boton_menos_2, boton_mas_2, cantidad_evento_2);
 

var modal_evento_1 = document.getElementById("modal-evento-1");
var abrir_evento_1 = document.getElementById("boton-reservar-1");
var cancelar_evento_1 = document.getElementById("cancelar-evento-1");
var aceptar_evento_1 = document.getElementById("aceptar-evento-1");
var nombre_evento_1 = document.getElementById("nombre-evento-1");
var apellido_evento_1 = document.getElementById("apellido-evento-1");
var email_evento_1 = document.getElementById("email-evento-1");

interaccionModalEventos(modal_evento_1, abrir_evento_1, cancelar_evento_1, aceptar_evento_1, nombre_evento_1, apellido_evento_1, email_evento_1);