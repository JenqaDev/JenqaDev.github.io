let data = JSON.parse(localStorage.getItem("data-grp1"));
let empresa = data.empresas[0];

if (document.getElementById("email")) {
  console.log("email");
  document.getElementById("email").value = empresa.email;
  document.getElementById("password").value = empresa.password;
}

function validarLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < data.empresas.length; i++) {
    if (
      email == data.empresas[i].email &&
      password == data.empresas[i].password
    ) {
      data.activeEmp = i;
      data.active = "";
      localStorage.setItem("data-grp1", JSON.stringify(data));
      $("#successModal").modal("show");

      // Add an event listener for when the modal is closed
      $("#successModal").on("hidden.bs.modal", function (e) {
        window.location.href = "homescreen.html"; // Redirect to conta.html
      });
    }
  }
}

function validarSignin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  let numero = document.getElementById("numero").value;

  if (numero.length !== 9 || isNaN(parseInt(numero))) {
    alert("Número inválido");
  } else if (password !== password2 || password.len < 6) {
    alert("Passwords não coincidem");
  } else if (localStorage.getItem("seccao") != null) {
    alert("Já existe uma conta!");
  } else {
    let newEmp = {
      email: email,
      password: password,
      numero: numero,
    };
    data.empresas.push(newEmp);
    data.activeEmp = data.empresas.length - 1;
    data.active = "";
    localStorage.setItem("data-grp1", JSON.stringify(data));

    $("#successModal").modal("show");

    // Add an event listener for when the modal is closed
    $("#successModal").on("hidden.bs.modal", function (e) {
      window.location.href = "Conta.html"; // Redirect to conta.html
    });
  }
}
