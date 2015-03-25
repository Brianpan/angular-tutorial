
app.controller("NewController", function($scope, $http, $location, $routeParams, Action){
    $scope.new_project = {};
    this.addProject = function(){
      var new_project = $scope.new_project;
    
      Action.post("POST", {project: new_project, _method: "post"}).then(function(data){
        new_project.id = data.id;        
      });
      
      $scope.projects.push(new_project);
      $scope.addCount();
      $scope.new_project = {}; 
      $location.path("/");
    };
    
  });
