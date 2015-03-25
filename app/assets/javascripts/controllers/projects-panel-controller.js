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