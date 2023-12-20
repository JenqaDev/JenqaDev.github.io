var locais = JSON.parse(localStorage.getItem("data-grp1")).locais || [];
window.onload = function () {
  var locais = JSON.parse(localStorage.getItem("data-grp1")).locais || [];
  var tabela = document.querySelector("table tbody");

  locais.forEach(function (local, index) {
    // Adicione index aqui
    var tr = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdLocalidade = document.createElement("td");
    var tdTipoEspaco = document.createElement("td");

    tdNome.textContent = local.nome;
    tdLocalidade.textContent = local.localidade;

    console.log(local.tipoEspaco);
    // Se local.tipoEspaco for 'op1', então local.tipoEspaco = 'Parque de Estacionamento'
    tdTipoEspaco.textContent = local.tipoEspaco;

    tr.appendChild(tdNome);
    tr.appendChild(tdLocalidade);
    tr.appendChild(tdTipoEspaco);

    tabela.appendChild(tr);
  });

  getMapCoordenates();
};

const key = "a7ea9f7215e74fd2995267101f5d5815";
const url = "https://api.opencagedata.com/geocode/v1/json?key=" + key + "&q=";

function initializeMap(lat, lng, name) {
  console.log("initializing map...");
  var map = L.map("map").setView([lat, lng], 6);
  var marker = L.marker([lat, lng]).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
  }).addTo(map);

  var portugalPorts = [
    { name: "Lisbon", lat: 38.7223, lng: -9.1393 },
    { name: "Porto", lat: 41.1579, lng: -8.6291 },
    { name: "Faro", lat: 37.0194, lng: -7.9322 },
    { name: "Aveiro", lat: 40.6443, lng: -8.6455 },
    { name: "Setúbal", lat: 38.5244, lng: -8.8882 },
    { name: "Leixões", lat: 41.1909, lng: -8.703 },
  ];

  // Loop through the array and add markers for each port
  var redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  portugalPorts.forEach(function (port) {
    var marker = L.marker([port.lat, port.lng], { icon: redIcon }).addTo(map);
    marker.bindPopup(port.name);
  });
}

function getMapCoordenates(adress = null) {
  let find = adress;
  if (find === null) {
    find = "aveiro,portugal";
  }
  $.ajax({
    url: url + find,
    dataType: "json",
    success: function (data) {
      console.log(data);
      console.log(data.results[0].geometry);
      let lat = data.results[0].geometry.lat;
      let lng = data.results[0].geometry.lng;
      console.log(lat + " " + lng);
      initializeMap(lat, lng);
    },
    error: function () {
      console.error("Data not found!");
    },
  });
}
