app.factory("Action", function ActionFactory(){
  return {
  	delete: function(url){
      return($.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: url
      })
      );
  	},
  	put: function(url, data){
      return($.ajax({
        type: "PUT",
        contentType: 'application/json',
        url: url,
        data: JSON.stringify(data)
      }));
  	},
  	post: function(url, data){
  		return($.ajax({type: "POST",
          type: "PUT",
          contentType: 'application/json',
          url: url,
          data: JSON.stringify(data)
  	    }));
  	}
  }
});