function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "admin" && p === "1234") {
    localStorage.setItem("login", "ok");
    window.location.href = "agregar.html";
  } else {
    alert("Datos incorrectos");
  }
}

if (window.location.pathname.includes("agregar")) {
  if (localStorage.getItem("login") !== "ok") {
    window.location.href = "login.html";
  }
}
