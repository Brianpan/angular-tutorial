
  var app = angular.module("project", []);
  
  ///main controller
  app.controller("MainController", function($scope, $http){
    $scope.addCount = function(){
      $scope.count += 1;	
    }
    this.count = 0;
    $http.get('project_list.json').success(function(data){
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
  
  app.controller("NewController", function($scope){
    this.project = {};
    this.addProject = function(){
      $scope.projects.push(this.project);
      $scope.addCount();
      this.project = {};
    };
    
  });
