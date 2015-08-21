
// JavaScript Document/* routers */
LaBreeze.Routers.Routes = Backbone.Router.extend({
		routes: {
			'': 'home',
			':id' : 'auth',
			'/feed/' : 'feed',
			'/tagsearch/:id': 'tagsearch',
			'/popular/' : 'popular',		
		},
		
		home: function() {
			if (LaBreeze.insta.render()) { // returns true if user is logged in.
				LaBreeze.router.navigate("/feed/", {trigger: true});
			} else {
				LaBreeze.Main.display("media/popular");
				LaBreeze.router.navigate("/popular/", {trigger: false});
			}		
		},

		auth: function(id) {
			var access_token = LaBreeze.Helpers.getaccessToken(id);
			LaBreeze.Helpers.createCookie('access_token',access_token,14);
			LaBreeze.insta.cookiecheck();
			if (LaBreeze.insta.render()){// returns true if user is logged in.
				LaBreeze.Main.display("users/self/feed");
				LaBreeze.router.navigate("/feed/", {trigger: false});	
			}
		},
		
		popular: function(){
			if (LaBreeze.insta.render()){// returns true if user is logged in.
				LaBreeze.Main.display("media/popular");
			}
				
		},

		feed: function() {
			if (LaBreeze.insta.render()) {  // returns true if user is logged in.
				LaBreeze.Main.display("users/self/feed");
			}
		},

		tagsearch: function(id) {
				LaBreeze.Main.display("tags", null, null, id);
		},
	})
LaBreeze.router = new LaBreeze.Routers.Routes();