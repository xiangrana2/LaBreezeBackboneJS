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
			this.token = "client_id=" + LaBreeze.settings.clientid;
		}
        var request = "https://api.instagram.com/v1/" + this.query + this.token + "&callback=?";
		return request;
    },
    parse: function(response) {
        return response.data;
    }
});
