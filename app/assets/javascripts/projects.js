(function(){
  var app = angular.module("project", []);
  app.config
  ///main controller
  app.controller("MainController", function(){
    this.projects = view;
    this.addCount = function(){
      this.projects.count += 1;	
    }
  });

  var view = {
  	name: "Brian's Project List",
  	count: 0,
  	projects: []};
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
  
  app.controller("NewController", function(){
    this.project = {};
    this.addProject = function(main){
      main.projects.projects.push(this.project);
      main.addCount();
    };
    this.project = {};
  });
})();