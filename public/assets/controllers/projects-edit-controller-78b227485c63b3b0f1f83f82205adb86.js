app.controller("EditController", function($scope, $http, $location, $routeParams, Action){
    $scope.project = {};
    var projectId = parseInt($routeParams.projectID);
    if(!$scope.projects){
      $http.get('/api/project_list.json').success(function(data){
        $scope.projects = data.projects;
        $scope.count = data.projects.length;
        var projects = $scope.projects;
        var target = $.grep(projects, function(e){return e.id == projectId})[0];
        var index = projects.indexOf(target);
        $scope.project = target;
      });
    }else{
      var projects = $scope.projects;
      var target = $.grep(projects, function(e){return e.id == projectId})[0];
      var index = projects.indexOf(target);
      $scope.project = target;
    }
    
    $scope.editProject = function(){
      
      /////update
      delete $scope.project["$$hashKey"];
      $scope.projects[index] = $scope.project;
      ///update backend
      //
      Action.put('/api/projects/'+ String(projectId), {project: $scope.project, id: projectId,  _method: 'put'})
      .then(function(data){
        
        $location.path("/");
        ///call scope outside of the angular
        $scope.$apply();
      });
     };  
    ///destroy function
    $scope.destroyProject = function(){
      $scope.projects.splice(index, 1);
      Action.delete('api/projects/' + String(projectId)).then(function(data){
        $location.path("/");
        $scope.$apply();
      });
    };
    $scope.returnProjects = function(){
      $location.path("/");
    };
   
  });
