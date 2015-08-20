
// JavaScript Document/* routers */
LaBreeze.Routers.Routes = Backbone.Router.extend({
		routes: {
			'': 'home',
			'/popular/' : 'popular',		
		},
		
		home: function() {
				LaBreeze.Main.display("media/popular");
				LaBreeze.router.navigate("/popular/", {trigger: false});	
		},
		
		popular: function(){
				LaBreeze.Main.display("media/popular");
		},
	})
LaBreeze.router = new LaBreeze.Routers.Routes();