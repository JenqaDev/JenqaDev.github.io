let data = JSON.parse(localStorage.getItem("data-grp1"));
let user = data.users[parseInt(data.active)];

let Account = function () {
  let self = this;
  self.User = ko.observable(user.username);
  self.Matriculas = ko.observableArray(user.car_info);
  self.CBancos = ko.observableArray(user.Cbancaria);
};

$(document).ready(function () {
  ko.applyBindings(new Account());
});
