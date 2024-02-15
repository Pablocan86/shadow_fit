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
      default:
        alert("Clave errónea");
    }
    document.querySelector("#codigo").value = "";
  }
});
