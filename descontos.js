// ViewModel
function DiscountViewModel() {
  var self = this;

  // Lista de Anúncios
  self.discounts = ko.observableArray(
    // Assuming "data-grp1" is a key in localStorage containing your discounts array
    // Use JSON.parse to convert the string back to an array
    (JSON.parse(localStorage.getItem("data-grp1")) || []).descounts

    // Add more discounts as needed
  );
}

// Aplicar o ViewModel ao DOM
ko.applyBindings(new DiscountViewModel());
