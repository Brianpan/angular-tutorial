
app.controller("NewController", function($scope, $http, $location, $routeParams){
    $scope.new_project = {};
    this.addProject = function(){
      var new_project = $scope.new_project;
      $.ajax({
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({project: new_project, _method: "post"}),
        url: 'api/projects/'
      }).then(function(data){
        new_project.id = data.id;        
      });
      
      $scope.projects.push(new_project);
      $scope.addCount();
      $scope.new_project = {}; 
      $location.path("/");
    };
    
  });