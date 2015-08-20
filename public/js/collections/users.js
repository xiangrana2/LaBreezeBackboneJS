
	
/* collections */
LaBreeze.Collections.Users = Backbone.Collection.extend({
    model: LaBreeze.Models.User,
    initialize: function(models, options) {
        this.query = options.query;
    },
    url: function() {

		if (LaBreeze.settings.accesstoken) {				
			this.token = "access_token=" + LaBreeze.settings.accesstoken;	
		} else {
			this.token = "client_id=" + LaBreeze.settings.clientid; // un-auth'ed query
		}
        console.log(this.token);
		 
        var request = "https://api.instagram.com/v1/" + this.query + this.token + "&callback=?";
        console.log(request);
		return request;
    },
    parse: function(response) {
        return response.data;
    }
});
