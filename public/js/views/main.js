
// the main controller class.
LaBreeze.Main = {
	// controls display of body of page
	display: function(endpoint, mediaID, userID, query) {
		$(".simplebutton").removeClass("active");
		
		switch(endpoint) {
			case "media/popular":
					// if view already exists
					if (LaBreeze.views.popular) {
						LaBreeze.views.popular.render(); // just render view
					} else { // create collection, view , fetch data.
						LaBreeze.collections.popular = new LaBreeze.Collections.Users([],{query: endpoint + "?"}); 
						LaBreeze.collections.popular.fetch({success: function(users, response){
							LaBreeze.views.popular = new LaBreeze.Views.UserDisplay({collection: LaBreeze.collections.popular}); 
						}
					}); 
					}
					break;
			case "users/self/feed":
				
					if (LaBreeze.views.feed) {
						LaBreeze.views.feed.render();
					} else {
						LaBreeze.collections.feed = new LaBreeze.Collections.Users([],{query: endpoint + "?"}); 
						LaBreeze.collections.feed.fetch({success: function(users, response){
							LaBreeze.views.feed = new LaBreeze.Views.UserDisplay({collection: LaBreeze.collections.feed});
						}
					 	});
					}
				
					 $("#feedLink").addClass("active");
				
				break;

			case "tags":			
						LaBreeze.collections.tags = new LaBreeze.Collections.Users([],{query: endpoint + "/" + query + "/media/recent?"}); 
						LaBreeze.collections.tags.fetch({success: function(users, response){
							$("#gallery-div").empty();
							LaBreeze.views.tags = new LaBreeze.Views.UserDisplay({collection: LaBreeze.collections.tags});
						}
					 	});
				break;	
				}
				
			}
		}