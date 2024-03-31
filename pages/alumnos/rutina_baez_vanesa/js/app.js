const divRutina = document.querySelector("#div_rutina");
const divAlimentos = document.querySelector("#div_alimentos");
const divProgresos = document.querySelector("#div_progresos");
document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("miSelect");

  selectElement.addEventListener("change", function () {
    const selectedOption =
      selectElement.options[selectElement.selectedIndex].value;
    switch (selectedOption) {
      case "RUTINA":
        divRutina.classList.remove("ocultar");
        divAlimentos.classList.add("ocultar");
        divProgresos.classList.add("ocultar");
        break;
      case "ALIMENTOS":
        divRutina.classList.add("ocultar");
        divAlimentos.classList.remove("ocultar");
        divProgresos.classList.add("ocultar");
        break;
      case "PROGRESOS":
        divRutina.classList.add("ocultar");
        divAlimentos.classList.add("ocultar");
        divProgresos.classList.remove("ocultar");
        break;
      default:
        break;
    }
  });
});
