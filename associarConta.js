let data = JSON.parse(localStorage.getItem("data-grp1"));
let user = data.users[parseInt(data.active)];
let Contas = user.Cbancaria;

function validateForm() {
  var cartao = $("#cartao");
  var mes = $("#mes");
  var ano = $("#ano");
  var codigo = $("#codigo");
  retVal = true;

  if (cartao.val().length !== 16) {
    retVal = false;
    alert("Número de cartão inválido!");
  }

  if (mes.val().length !== 2) {
    retVal = false;
    alert("Data inválida!");
  }

  if (ano.val().length !== 4) {
    retVal = false;
    alert("Data inválida");
  }

  if (codigo.val().length !== 3) {
    alert("Codigo inválido!");
    retVal = false;
  }

  if (retVal) {
    // Form is valid
    Contas.push({ numCard: cartao.val() });
    data.users[parseInt(data.active)].Cbancaria = Contas;
    localStorage.setItem("data-grp1", JSON.stringify(data));

    // Show success modal
    $("#successModal").modal("show");

    // Add an event listener for when the modal is closed
    $("#successModal").on("hidden.bs.modal", function (e) {
      window.location.href = "Conta.html"; // Redirect to conta.html
    });
  }
}

// Assuming you have a button or form submit triggering this function
// Example button:
// <button onclick="validateForm()">Submit</button>
