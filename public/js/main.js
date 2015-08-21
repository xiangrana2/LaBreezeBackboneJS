// load html templates usinf ajax
$('#logout-btn').hide();
$('#templates').load('templates/templates.html', function() {
    // kick off the app once all the external templates have loaded.  
    LaBreeze.insta = new LaBreeze.Views.InstaView(); // instance of the InstaView class
    Backbone.history.start("/insta-gallery/");
});

$('#logout-btn').click(function() {
	LaBreeze.Helpers.eraseCookie('access_token');
	LaBreeze.settings.accesstoken = null;
	window.location = "http://localhost:3000/";
});
$( "#search-tag" ).submit(function( event ) {
    var query = $("#search").val();
	LaBreeze.router.navigate("/tagsearch/" + query, {trigger: true});
});

LaBreeze.Views.InstaView = Backbone.View.extend({ 
	initialize: function() {
		console.log("initialize app");
		this.cookiecheck();
	},
	render: function(){
		if (LaBreeze.settings.accesstoken){	
			$('#login-btn').hide();
			$('#logout-btn').show();
			return true;
		} else {
			console.log("not logged in");
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
