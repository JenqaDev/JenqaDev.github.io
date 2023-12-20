$(document).ready(function () {
  function ViewModel() {
    let self = this;
    self.classificacao = ko.observable();
    self.newClass = function (alt) {
      if (alt < 1.1) {
        self.classificacao("A");
      } else if (alt < 1.3) {
        self.classificacao("B");
      } else if (alt < 1.5) {
        self.classificacao("C");
      }
    };
    $("#altura").on("keyup", function () {
      self.newClass($("#altura").val());
    });
  }

  ko.applyBindings(new ViewModel());
});

function validarMatricula() {
  var altura = $("#altura").val();
  var matricula1 = $("#matricula1").val();
  var matricula2 = $("#matricula2").val();

  let data = JSON.parse(localStorage.getItem("data-grp1"));
  let user = data.users[data.active];
  let matriculas = Array.isArray(user.car_info) ? user.car_info : [];

  // Verificar se a matrícula é válida.'
  if (matricula1.length == 6 && matricula1 == matricula2 && altura) {
    let newMatricula = {
      matricula: matricula1,
      altura: altura,
    };
    matriculas.push(newMatricula);
    console.log(matriculas);
    data.users[data.active].car_info = matriculas;

    localStorage.setItem("data-grp1", JSON.stringify(data));
    $("#successModal").modal("show");

    // Add an event listener for when the modal is closed
    $("#successModal").on("hidden.bs.modal", function (e) {
      window.location.href = "Conta.html"; // Redirect to conta.html
    });
  }
}
