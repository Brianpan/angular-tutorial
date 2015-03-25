(function(){
var app = angular.module("project", ["ngRoute", "templates"]);

  app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/", {
      controller: "PanelController",
      templateUrl: "projects/panel.html"
    });
    $routeProvider.when("/projects/edit/:projectID", {
      controller: "EditController",
      templateUrl: "projects/form.html"
    });
    $routeProvider.when("/projects/new", {
      controller: "NewController",
      templateUrl: "projects/new.html"
    });
     $routeProvider.otherwise({
        redirectTo: '/'
      });
  }]);
  
})();  
