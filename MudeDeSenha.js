function MudeSenha() {
  var userName = document.getElementById("UserName").value;
  let senha = document.getElementById("senha").value;
  let senha2 = document.getElementById("senha2").value;

  let data = JSON.parse(localStorage.getItem("data-grp1"));
  let user = data.users[data.users.length - 1];

  if (userName !== user.username) {
    alert("Não tem conta, por favor registe-se");
  } else if (senha !== senha2 || senha.length < 6) {
    alert("Passwords não coincidem");
  } else {
    user.password = senha;
    data.users[parseInt(data.active)] = user;
    localStorage.setItem("data-grp1", JSON.stringify(data));
    // Show success modal
    $("#successModal").modal("show");

    // Add an event listener for when the modal is closed
    $("#successModal").on("hidden.bs.modal", function (e) {
      window.location.href = "login.html"; // Redirect to conta.html
    });
  }
}
