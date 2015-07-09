define([
	'jquery',
	'underscore', 
	'backbone',
	'handlebars',
	 'models/TodoItem'], function($,_, Backbone,Handlebars, TodoItem){

	var TodoItemView = Backbone.View.extend({
		tagName: 'li',

		className: 'todo-item',	
		events:{
			'click #toggle': 'onClickToggle',
			'click .deleteBtn': 'onClickDelete'
		},

		initialize: function(options){
			if(!options && !options.model){
				throw new Error('Model is not specified');
			}
			this.model.on('change', this.render, this);
		},
		onClickDelete: function(){

			this.model.destroy();
		},	
		onClickToggle: function(){

			this.model.toggle();
			this.model.save();
		},		
		render: function(){

			this.$el.attr('id', this.model.id);
			this.$el.toggleClass('completed', this.model.get('completed'));

			var source = $("#todoItemTemplate").html(); 
			var template = Handlebars.compile(source); 
			
			this.$el.html(template(this.model.toJSON()));
			//Code before using template
			//var checked = this.model.get('completed') ? 'checked' : ''; 
			//this.$el.html('<input type="checkbox" id="toggle"' + checked + '>' + this.model.escape('title') + '<button class="deleteBtn">Delete</button>');

			return this;
		}
	});
	
	return TodoItemView;
});	
