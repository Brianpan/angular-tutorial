///main controller
  app.controller("MainController", function($scope, $http){
    $scope.addCount = function(){
      $scope.count += 1;	
    }
    $scope.count = 0;
    $http.get('/api/project_list.json').success(function(data){
      $scope.projects = data.projects;
      $scope.count = data.projects.length;
    });
  });
 