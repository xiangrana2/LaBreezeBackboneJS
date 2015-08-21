// this is where all the views live.
(function($){
// basically just iterates over a collection, creates a new view per model and puts it in ul.
LaBreeze.Views.UserDisplay = Backbone.View.extend({
	initialize: function(){	
		_.bindAll(this, 'render');
		this.render();
	},

	render: function() {
		var template = _.template($('#caption-user-tmpl').html());	
		this.collection.each(function(user, index) {
			this.renderedContent = template(user.toJSON());
			$("#gallery-div").append(this.renderedContent);
		})
	},
})

})(jQuery);