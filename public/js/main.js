// load html templates usinf ajax
$('#templates').load('templates/templates.html', function() {
    // kick off the app once all the external templates have loaded.  
    LaBreeze.insta = new LaBreeze.Views.InstaView(); // instance of the InstaView class
    Backbone.history.start("/insta-gallery/");
});

LaBreeze.Views.InstaView = Backbone.View.extend({ 
	initialize: function() {
		console.log("initialize app");
		this.cookiecheck();
	},
	render: function(){
		if (LaBreeze.settings.accesstoken){		
			if (!this.header_auth) {
				this.header_auth = new LaBreeze.Views.MenuAuth(); // show full menu
			}
			return true;
		} else {
			console.log("not logged in");
			if (!this.header_noauth) {
				this.header_noauth = new LaBreeze.Views.MenuDefault(); // display log in menu
			}
			return false;
		}; 	
	},
	cookiecheck: function(){
		var accesstoken = LaBreeze.Helpers.readCookie('access_token');
		if (accesstoken){
			LaBreeze.settings.accesstoken = accesstoken;	
		}
	}
});	
