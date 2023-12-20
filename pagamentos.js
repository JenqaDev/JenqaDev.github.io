// ViewModel
function DiscountViewModel() {
  var self = this;

  self.locais = ko.observableArray(
    // Use JSON.parse to convert the string back to an array
      (JSON.parse(localStorage.getItem("data-grp1")) || []).locais

    );
}

// Aplicar o ViewModel ao DOM
ko.applyBindings(new DiscountViewModel());
