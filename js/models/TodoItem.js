
define([
	'underscore', 
	'backbone'], function(_, Backbone) {
	
	var TodoItem = Backbone.Model.extend({
		defaults: {
			completed : false
		},

		validate: function(attrs){
			if(!attrs.title){
				return 'Title is required';
			}
		},
		toggle: function(){
			this.set('completed', !this.get('completed'));
		}
	});

	return TodoItem;
});

