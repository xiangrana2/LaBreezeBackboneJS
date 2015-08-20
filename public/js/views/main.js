
// the main controller class.
LaBreeze.Main = {
	
	
	// controls display of body of page
	display: function(endpoint, mediaID, userID, query) {
		$(".simplebutton").removeClass("active");
		
		switch(endpoint) {
				case "media/popular":
					// if view already exists
					console.log("case media popular");
					if (LaBreeze.views.popular) {
						console.log("case media popular if1");
						LaBreeze.views.popular.render(); // just render view
					} else { // create collection, view , fetch data.
						console.log("case media popular if2");
						LaBreeze.collections.popular = new LaBreeze.Collections.Users([],{query: endpoint + "?"}); 
						LaBreeze.collections.popular.fetch({success: function(users, response){
							LaBreeze.views.popular = new LaBreeze.Views.UserDisplay({collection: LaBreeze.collections.popular}); 
						 	}
						 }); 
					}
				break;
		}
				
	}
}
