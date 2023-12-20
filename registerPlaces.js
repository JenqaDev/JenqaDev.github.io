function ViewModel() {
  this.selectedOption = ko.observable();
}

ko.applyBindings(new ViewModel());

function validarPlace() {
  var nome = $("#nome").val();
  var morada = $("#morada").val();
  var codigoPostal = $("#codigoPostal").val();
  var localidade = $("#localidade").val();
  var numeroLugares = $("#numeroLugares").val();
  var preco = $("#preco").val();
  var horario = $("#horario").val();
  var tipoEspaco = $("#tipo").val();

  // Verificar se o tipo de espaço foi selecionado
  if (tipoEspaco === "") {
    alert("Por favor, selecione um tipo de espaço.");
    return false;
  }

  // Verificar se o nome tem mais de 3 letras
  if (nome.length <= 3) {
    alert("O nome deve ter mais de 3 letras.");
    return false;
  }

  // Verificar se a morada começa com 'Rua'
  if (!morada.startsWith("Rua")) {
    alert('A morada deve começar com "Rua".');
    return false;
  }

  // Verificar se o código postal tem o formato correto (xxxx-xxx)
  var regex = /^[0-9]{4}-[0-9]{3}$/;
  if (!regex.test(codigoPostal)) {
    alert("O código postal deve ter o formato xxxx-xxx.");
    return false;
  }

  // Verificar se a localidade tem mais de 3 letras
  if (localidade.length <= 3) {
    alert("A localidade deve ter mais de 3 letras.");
    return false;
  }

  // Verificar se o número de lugares é um número
  if (isNaN(numeroLugares)) {
    alert("O número de lugares deve ser um número.");
    return false;
  }

  // Verificar se o preço é um número
  if (isNaN(preco)) {
    alert("O preço deve ser um número.");
    return false;
  }

  // Verificar se o horário tem o formato correto (xx:xx-xx:xx)
  var regex = /^[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}$/;
  if (!regex.test(horario)) {
    alert("O horário deve ter o formato xx:xx-xx:xx.");
    return false;
  }

  // Se todas as verificações passarem, retornar verdadeiro
  let data = JSON.parse(localStorage.getItem("data-grp1") || []);
  var locais = data.locais;
  var locaisEmp = data.empresas[parseInt(data.activeEmp)].locais;
  console.log(locaisEmp);
  var novoLocal = {
    nome: nome,
    localidade: localidade,
    preco: preco,
    tipoEspaco: tipoEspaco,
  };
  locais.push(novoLocal);
  locaisEmp.push(novoLocal);

  data.locais = locais;
  data.empresas[parseInt(data.activeEmp)].locais = locaisEmp;

  localStorage.setItem("data-grp1", JSON.stringify(data));
  $("#successModal").modal("show");
}
