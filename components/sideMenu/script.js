(function() {
  angular.module("myApp").controller("sideMenuctrl", SideMenuController);

  function SideMenuController() {
    var sml = this;
    sml.data = list;
  }

  var list = [
    "Top Stories",
    "New Questions",
    "Bookmarked Answers",
    "Finance",
    "Marketing",
    "Sports",
    "Psychology",
    "Music"
  ]

})();
