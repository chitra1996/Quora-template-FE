(function() {
  angular.module("myApp").controller("navbarCtrl", navbarController);

  function navbarController() {
    var nbl = this;
    nbl.data = list;
  }

  var list = [
    {
      type: "Home"
    },
    {
      type: "Answers"
    },
    {
      type: "Notifications"
    }
  ]
})();
