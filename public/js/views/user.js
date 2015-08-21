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
			$caption = $("#gallery-div div:last-child .description");
			$caption.css('opacity', 0)
			//..set width same as the image...  
			.css('width', $caption.siblings('img').width())
			.parent().css('width', $caption.siblings('img').width())
			.css('display', 'block');
		})
    },
    events: {
			"mouseenter div.wrapper"   : "hoverOn",
			"mouseleave div.wrapper"   : "hoverOff",
	},

	hoverOn: function(e) { 
				//when mouse hover over the wrapper div  
				//get it's children elements with class description '  
				//and show it using fadeTo 
				alert("ooh");
				$(this.el).find('div.description').stop().fadeTo(500, 0.7); 
	},
		
		
	hoverOff: function(e) { 
				//when mouse out of the wrapper div  
				//use fadeTo to hide the div  
				$(this.el).find('div.description').stop().fadeTo(500, 0);
	}	
})

})(jQuery);