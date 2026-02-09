let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

const lista = document.getElementById("lista");
const catalogo = document.getElementById("catalogo");

if (lista) mostrarAdmin();
if (catalogo) mostrarCatalogo();

function mostrarAdmin() {
  lista.innerHTML = "";
  proyectos.forEach((p, i) => {
    lista.innerHTML += `
      <div class="card">
        <img src="${p.img}" onclick="verImagen('${p.img}')">
        <h3>${p.titulo}</h3>
        <p>${p.desc}</p>
        <button onclick="eliminar(${i})">Eliminar</button>
      </div>
    `;
  });
}

function mostrarCatalogo() {
  catalogo.innerHTML = "";
  proyectos.forEach(p => {
    catalogo.innerHTML += `
      <div class="card">
        <img src="${p.img}" onclick="verImagen('${p.img}')">
        <h3>${p.titulo}</h3>
        <p>${p.desc}</p>
      </div>
    `;
  });
}

const form = document.getElementById("formProyecto");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const desc = document.getElementById("descripcion").value;
    const file = document.getElementById("imagen").files[0];

    const reader = new FileReader();
    reader.onload = () => {
      proyectos.push({
        titulo: titulo,
        desc: desc,
        img: reader.result
      });

      localStorage.setItem("proyectos", JSON.stringify(proyectos));
      mostrarAdmin();
      form.reset();
    };

    reader.readAsDataURL(file);
  });
}

function eliminar(i) {
  proyectos.splice(i, 1);
  localStorage.setItem("proyectos", JSON.stringify(proyectos));
  mostrarAdmin();
}
