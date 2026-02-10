const catalogo = document.getElementById("catalogo");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const btnAgregar = document.getElementById("btnAgregar");

let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

// Ver login
if (localStorage.getItem("login") !== "true") {
  btnAgregar.style.display = "none";
}

function render() {
  catalogo.innerHTML = "";

  proyectos.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.imagen}" onclick="verImagen('${p.imagen}')">
      <h3>${p.nombre}</h3>
      ${
        localStorage.getItem("login") === "true"
          ? `<button onclick="eliminar(${i})">Eliminar</button>`
          : ""
      }
    `;

    catalogo.appendChild(div);
  });
}

function verImagen(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

function eliminar(index) {
  proyectos.splice(index, 1);
  localStorage.setItem("proyectos", JSON.stringify(proyectos));
  render();
}

render();

