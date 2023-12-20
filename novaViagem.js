function MapViewModel() {
  var self = this;

  self.startLocation = ko.observable("");
  self.endLocation = ko.observable("");
  self.routeDistance = ko.observable(""); // Variável para armazenar a distância
  self.price = ko.observable("");

  self.updateStartLocation = function () {
    // Pode ser implementada alguma lógica adicional, se necessário
  };

  self.updateEndLocation = function () {
    // Pode ser implementada alguma lógica adicional, se necessário
  };

  // Função para desenhar a rota no mapa
  self.drawRoute = function () {
    var start = self.startLocation();
    var end = self.endLocation();

    // Criar o mapa
    var map = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    // Adicionar geocodificador de controle
    var geocoder = L.Control.Geocoder.nominatim();
    L.Control.geocoder({ geocoder: geocoder }).addTo(map);

    // Geocodificar os endereços para obter as coordenadas
    geocoder.geocode(start, function (results) {
      var startCoordinates = results[0].center;
      geocoder.geocode(end, function (results) {
        var endCoordinates = results[0].center;

        // Adicionar controle de roteamento
        var control = L.Routing.control({
          waypoints: [L.latLng(startCoordinates), L.latLng(endCoordinates)],
          routeWhileDragging: true,
        }).addTo(map);

        // Adicionar um ouvinte para o evento 'routeselected'
        control.on("routeselected", function (e) {
          // A distância está disponível em e.route.summary.totalDistance
          self.routeDistance(e.route.summary.totalDistance);
        });
      });
    });
  };
}

// Inicializar o modelo Knockout
var viewModel = new MapViewModel();
ko.applyBindings(viewModel);
