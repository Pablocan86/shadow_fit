const mainContacto = document.querySelector(".maincontacto");

const ingresoRutina = document.querySelector("#boton_ingresar");
const ingresoCodigo = document.querySelector("#codigo");

ingresoRutina.addEventListener("click", () => {
  const codigo = document.querySelector("#codigo").value.toUpperCase();

  switch (codigo) {
    case "BANZASTOMAS":
      window.location.href = "alumnos/rutina_banzas_tomas/";
      break;
    case "CASTROCAMILA":
      window.location.href = "alumnos/rutina_Camila_Rutina/";
      break;
    case "RAMOSPATRICIO":
      window.location.href = "alumnos/rutina_ramos_patricio/";
      break;
    case "LOPEZCARLA":
      window.location.href = "alumnos/rutina_carla_lopez/";
      break;
    default:
      alert("Clave errónea");
  }
  document.querySelector("#codigo").value = "";
});

ingresoCodigo.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let codigoMayusculas = ingresoCodigo.value.toUpperCase();
    switch (codigoMayusculas) {
      case "BANZASTOMAS":
        window.location.href = "alumnos/rutina_banzas_tomas/";
        break;
      case "CASTROCAMILA":
        window.location.href = "alumnos/rutina_Camila_Rutina/";
        break;
      case "RAMOSPATRICIO":
        window.location.href = "alumnos/rutina_ramos_patricio/";
        break;
      case "LOPEZCARLA":
        window.location.href = "alumnos/rutina_carla_lopez/";
        break;
      case "BAEZVANESA":
        window.location.href = "alumnos/rutina_baez_vanesa/";
        break;
      default:
        alert("Clave errónea");
    }
    document.querySelector("#codigo").value = "";
  }
});

function enviarWhatsApp() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var consulta = document.getElementById("consulta").value;

  var mensaje = "¡Hola! Me gustaría pedir un producto de su página.\n\n";
  mensaje += "Mi nombre es " + nombre + "\n";
  mensaje += ". Mi correo es " + email + "\n";
  mensaje += ". Consulta:  " + consulta;

  var url = "https://wa.me/541154829958/?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");

  // Cambiar el contenido de .maincontacto después de enviar el formulario
  mainContacto.innerHTML = `<div class="gracias">GRACIAS POR ESCRIBIRNOS</div>`;
}
