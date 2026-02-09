const proyectos = [
  {
    titulo: "Proyecto Academico UTC",
    imagen: "utc.png"
  }
];

const contenedor = document.getElementById("catalogo");

if (contenedor) {
  proyectos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.imagen}" onclick="verImagen('${p.imagen}')">
      <h3>${p.titulo}</h3>
    `;
    contenedor.appendChild(card);
  });
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function verImagen(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

modal?.addEventListener("click", () => {
  modal.style.display = "none";
});

