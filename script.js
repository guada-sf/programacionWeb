// DESCARGAR CATÁLOGO DE PRODUCTOS

var descargar_link = document.getElementById("descarga-catalogo");

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

colorTextoClickeable(descargar_link);

descargar_link.addEventListener("click", function() {
  var enlace = document.createElement("a");
  enlace.href = "pdfs/catalogoProMed.pdf";
  enlace.download = "catalogoProMed.pdf";
  enlace.click();
});


// CUENTA REGRESIVA A CURSOS

function cuentaRegresiva(fecha_inicio_string, fecha_fin_string, id_elemento) {
  var fecha_inicio_date = new Date(fecha_inicio_string).getTime();
  var fecha_fin_date = new Date(fecha_fin_string).getTime();

  var x = setInterval(function(){
    
    var fecha_hoy_date = new Date().getTime();

    var diferencia_fechas = fecha_inicio_date - fecha_hoy_date

    var dias = Math.floor(diferencia_fechas / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia_fechas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia_fechas % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia_fechas % (1000 * 60)) / 1000);
  
    if(diferencia_fechas < 0){
      clearInterval(x);

      if (fecha_hoy_date > fecha_inicio_date && fecha_hoy_date < fecha_fin_date) {
        document.getElementById(id_elemento).innerHTML = "El curso ya comenzó.";
      } else if (fecha_hoy_date > fecha_fin_date) {
        document.getElementById(id_elemento).innerHTML = "El curso ha finalizado.";
      }

    } else{
      document.getElementById(id_elemento).innerHTML = "El curso comienza en: <br>" + dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
    }

  }, 1000);
};

// cuenta regresiva 1
var fecha_inicio_1 = "Nov 15, 2023 11:00:00";
var fecha_fin_1 = "Dec 13, 2023 11:00:00";
var id_evento_1 = "countdown1";
cuentaRegresiva(fecha_inicio_1, fecha_fin_1, id_evento_1);

// cuenta regresiva 2
var fecha_inicio_2 = "Jan 8 2024 11:00:00";
var fecha_fin_2 = "Jan 29 2024 11:00:00";
var id_evento_2 = "countdown2";
cuentaRegresiva(fecha_inicio_2, fecha_fin_2, id_evento_2);

// cuenta regresiva 2
var fecha_inicio_3 = "Feb 6, 2024 11:00:00";
var fecha_fin_3 = "Mar 12 2024 11:00:00";
var id_evento_3 = "countdown3";
cuentaRegresiva(fecha_inicio_3, fecha_fin_3, id_evento_3);


// VENTANAS MODALES

function interaccionModal(ventana_modal, boton_abrir, boton_cerrar) {
  boton_abrir.addEventListener("click", () => {
    ventana_modal.showModal();
    document.body.classList.add('modal-abierto');
  });
  
  boton_cerrar.addEventListener("click", () => {
    ventana_modal.close();
    document.body.classList.remove('modal-abierto');
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

  boton_menos.addEventListener("click", function (){
    var cantidad = parseInt(cantidad_evento.textContent);
    if (cantidad > 1) {
      cantidad--;
      cantidad_evento.textContent = cantidad;
    }
  }); 
  
  boton_mas.addEventListener("click", function (){
    var cantidad = parseInt(cantidad_evento.textContent);
    cantidad++;
    cantidad_evento.textContent = cantidad;
  }); 

}

// Ventana modal para reserva de entradas
function interaccionModalEventos(ventana_modal, cancelar_evento, aceptar_evento, nombre_evento, apellido_evento, email_evento, texto_completar_datos, boton_abrir, cantidad_evento, evento) {
  
  // Abrir ventana modal con boton Reservar
  boton_abrir.addEventListener("click", () => {
    document.body.classList.add('modal-abierto');
    ventana_modal.showModal();
    texto_completar_datos.textContent = "";
  });
  
  // Salir de la ventana modal con boton Cancelar
  cancelar_evento.addEventListener("click", () => {
    nombre_evento.value = '';
    apellido_evento.value = '';
    email_evento.value = '';
    texto_completar_datos.textContent = '';
    ventana_modal.close();
    cantidad_evento.textContent = "1";
    document.body.classList.remove('modal-abierto');
  });

  // Confirmar reserva y salir de la ventana modal con boton Aceptar
  aceptar_evento.addEventListener("click", () => {

    if (nombre_evento.value.trim() !== "" && apellido_evento.value.trim() !== "" && email_evento.value.trim() !== "") {
      nombre_evento.value = '';
      apellido_evento.value = '';
      email_evento.value = '';
      ventana_modal.close();

      if (cantidad_evento.textContent == "1"){
        Toastify({
          text: "Ha reservado correctamente su entrada.",
          duration: 3000,  // Duración en milisegundos
          gravity: "top",  // Posición: "top" o "bottom"
          position: "center"  // Posición horizontal: "left", "center", "right"
        }).showToast();
      } else {
        Toastify({
          text: "Ha reservado correctamente sus entradas.",
          duration: 3000,  // Duración en milisegundos
          gravity: "top",  // Posición: "top" o "bottom"
          position: "center"  // Posición horizontal: "left", "center", "right"
        }).showToast();
      }

      cantidad_evento.textContent = "1";
      document.body.classList.remove('modal-abierto');

    } else {
      texto_completar_datos.textContent = "Por favor complete todos los datos.";
    }
  });
};

var ventana_modal_1 = document.getElementById("modal-evento-1");
var cancelar_evento_1 = document.getElementById("cancelar-evento-1");
var aceptar_evento_1 = document.getElementById("aceptar-evento-1");
var nombre_evento_1 = document.getElementById("nombre-evento-1");
var apellido_evento_1 = document.getElementById("apellido-evento-1");
var email_evento_1 = document.getElementById("email-evento-1");
var texto_completar_datos_1 = document.getElementById("texto-completar-datos-1");
var boton_menos_1 = document.getElementById("boton-menos-1");
var boton_mas_1 = document.getElementById("boton-mas-1");
var cantidad_evento_1 = document.getElementById("cantidad-evento-1");
var evento_1 = document.getElementById("evento-1");
var abrir_evento_1 = document.getElementById("boton-reservar-1");

var ventana_modal_2 = document.getElementById("modal-evento-2");
var cancelar_evento_2 = document.getElementById("cancelar-evento-2");
var aceptar_evento_2 = document.getElementById("aceptar-evento-2");
var nombre_evento_2 = document.getElementById("nombre-evento-2");
var apellido_evento_2 = document.getElementById("apellido-evento-2");
var email_evento_2 = document.getElementById("email-evento-2");
var texto_completar_datos_2 = document.getElementById("texto-completar-datos-2");
var boton_menos_2 = document.getElementById("boton-menos-2");
var boton_mas_2 = document.getElementById("boton-mas-2");
var cantidad_evento_2 = document.getElementById("cantidad-evento-2");
var evento_2 = document.getElementById("evento-2");
var abrir_evento_2 = document.getElementById("boton-reservar-2");

actualizarCantidad(boton_menos_1, boton_mas_1, cantidad_evento_1);
interaccionModalEventos(ventana_modal_1, cancelar_evento_1, aceptar_evento_1, nombre_evento_1, apellido_evento_1, email_evento_1, texto_completar_datos_1, abrir_evento_1, cantidad_evento_1, evento_1);

actualizarCantidad(boton_menos_2, boton_mas_2, cantidad_evento_2);
interaccionModalEventos(ventana_modal_2, cancelar_evento_2, aceptar_evento_2, nombre_evento_2, apellido_evento_2, email_evento_2, texto_completar_datos_2, abrir_evento_2, cantidad_evento_2, evento_2);