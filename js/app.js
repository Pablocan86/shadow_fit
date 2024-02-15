const ingresoRutina = document.querySelector("#boton_ingresar");
const ingresoCodigo = document.querySelector("#codigo");

ingresoRutina.addEventListener("click", () => {
  const codigo = document.querySelector("#codigo").value.toLowerCase();

  switch (codigo) {
    case "banzastomas":
      window.location.href = "alumnos/rutina_banzas_tomas/";
      break;
    case "castrocamila":
      window.location.href = "alumnos/rutina_Camila_Rutina/";
      break;
    case "ramospatricio":
      window.location.href = "alumnos/rutina_ramos_patricio/";
      break;
    case "lopezcarla":
      window.location.href = "alumnos/rutina_carla_lopez/";
      break;
    default:
      alert("Clave errónea");
  }
  document.querySelector("#codigo").value = "";
});

ingresoCodigo.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let codigoMayusculas = ingresoCodigo.value.toLowerCase();
    switch (codigoMayusculas) {
      case "banzastomas":
        window.location.href = "alumnos/rutina_banzas_tomas/";
        break;
      case "castrocamila":
        window.location.href = "alumnos/rutina_Camila_Rutina/";
        break;
      case "ramospatricio":
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
