let data = JSON.parse(localStorage.getItem("data-grp1"));
let user = data.users[0];

if (document.getElementById("username")) {
  console.log("username");
  document.getElementById("username").value = user.username;
  document.getElementById("password").value = user.password;
}

function validarLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < data.users.length; i++) {
    if (
      username == data.users[i].username &&
      password == data.users[i].password
    ) {
      data.active = i;
      data.activeEmp = "";

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
  let nome = document.getElementById("nome").value;
  let nif = document.getElementById("nif").value;
  let numero = document.getElementById("numero").value;

  if (nif.length !== 9 || isNaN(parseInt(nif))) {
    alert("NIF inválido");
  } else if (numero.length !== 9 || isNaN(parseInt(numero))) {
    alert("Número inválido");
  } else if (password !== password2 || password.len < 6) {
    alert("Passwords não coincidem");
  } else if (nome.length < 3) {
    alert("Nome inválido");
  } else {
    let newUser = {
      username: email,
      password: password,
      car_info: [],
      Cbancaria: [],
    };
    data.users.push(newUser);
    data.active = data.users.length - 1;
    data.activeEmp = "";
    localStorage.setItem("data-grp1", JSON.stringify(data));

    $("#successModal").modal("show");

    // Add an event listener for when the modal is closed
    $("#successModal").on("hidden.bs.modal", function (e) {
      window.location.href = "homescreen.html"; // Redirect to conta.html
    });
  }
}
