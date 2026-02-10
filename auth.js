document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === "admin" && password === "1234") {
    localStorage.setItem("login", "true");
    alert("Login correcto");
    window.location.href = "catalogo.html";
  } else {
    document.getElementById("mensaje").innerText =
      "Usuario o contraseña incorrectos";
  }
});

