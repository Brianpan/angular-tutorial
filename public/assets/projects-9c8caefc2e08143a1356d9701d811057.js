
  var app = angular.module("project", ["ngRoute", "templates"]);

  app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/projects", {
      controller: "PanelController",
      templateUrl: "projects/panel.html"
    });
    $routeProvider.when("/projects/edit/:projectID", {
      controller: "EditController",
      templateUrl: "projects/form.html"
    });

     $routeProvider.otherwise({
        redirectTo: '/projects'
      });
  }]);
  
  ///main controller
  app.controller("MainController", function($scope, $http){
    $scope.addCount = function(){
      $scope.count += 1;	
    }
    this.count = 0;
    $http.get('/api/project_list.json').success(function(data){
      $scope.projects = data.projects;
      $scope.count = data.projects.length;
    });
  });
  
  
  ///angular controllers
  app.controller("PanelController", function(){
    this.tab = 1;
    this.setTab = function(val){
      this.tab = val;	
    };
    this.isTab = function(val){
      return(this.tab === val);
    };
  });
  
  app.controller("NewController", function($scope, $http, $location, $routeParams){
    this.project = {};
    this.addProject = function(){
      var new_project = this.project;
      $.ajax({
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({project: this.project, _method: "post"}),
        url: 'api/projects/'
      }).then(function(data){
        new_project.id = data.id;
        $scope.projects.push(new_project);
        $scope.addCount();
        this.project = {};
        $location.path("/projects");
        $scope.$apply();
      });      
    };
    
  });
  
  app.controller("EditController", function($scope, $http, $location, $routeParams){
    $scope.project = {};
    var projectId = parseInt($routeParams.projectID);
    var projects = $scope.projects;
    var target = $.grep(projects, function(e){return e.id == projectId})[0];
    var index = projects.indexOf(target);
    
    $scope.project = target;
    
    $scope.editProject = function(){
      
      /////update
      delete $scope.project["$$hashKey"];
      $scope.projects[index] = $scope.project;
      ///update backend
      //
      $.ajax({
        type: "PUT",
        contentType: 'application/json',
        url: '/api/projects/'+ String(projectId),
        data: JSON.stringify({project: $scope.project, id: projectId,  _method: 'put'})
      }).then(function(data){
        
        $location.path("/projects");
        ///call scope outside of the angular
        $scope.$apply();
      });
     };  
    ///destroy function
    $scope.destroyProject = function(){
      $scope.projects.splice(index, 1);
      $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: 'api/projects/' + String(projectId)
      }).then(function(data){
        $location.path("/projects");
        $scope.$apply();
      });
    };
    $scope.returnProjects = function(){
      $location.path("/projects");
      $scope.$apply();
    };
   
  });
