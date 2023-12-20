let dataGrp1 = {
  active: "",
  users: [
    {
      username: "user1",
      password: "hashed_password1",
      car_info: [
        {
          matricula: "ABC123",
          altura: 1.8,
        },
      ],
      Cbancaria: [
        {
          numCard: "9999999999999999",
        },
      ],
    },
  ],

  locais: [
    {
      codigo_postal: "54321-876",
      localidade: "Another City",
      horario: "08:00-20:00",
      preco_por_kilometro: 0.12,
      nome: "Autoestrada do Sul",
      morada: "Expressway Avenue, Another City",
      tipoEspaco: "Autoestrada",
    },
    {
      codigo_postal: "12345-678",
      localidade: "Example City",
      horario: "08:00-20:00",
      preco_por_kilometro: 0.1,
      nome: "Autoestrada do Norte",
      morada: "Highway Street, Example City",
      tipoEspaco: "Autoestrada",
    },
  ],
  empresas: [
    {
      email: "Fake1",
      password: "fakeEm",
      numero: "123456789",
      locais: [],
    },
  ],
  activeEmp: "",
  descounts: [
    {
      descricao: "20% de DESCONTO IMEDIATO na sua loja [LOJA]!",
      menssagem: "Aproveite!",
      imagem: "https://cdn-icons-png.flaticon.com/512/928/928202.png",
    },
    {
      descricao: "Leve 3 pague 2 na sua [LOJA]",
      menssagem: "IMPERDÍVEL!",
      imagem:
        "https://img.freepik.com/psd-gratuitas/icone-de-desconto-de-renderizacao-3d_220664-2532.jpg",
    },
    ],
};

//localStorage.removeItem("data-grp1");
$(document).ready(function () {
  let save = localStorage.getItem("data-grp1");
  if (save == null) {
    localStorage.setItem("data-grp1", JSON.stringify(dataGrp1));
  }
});