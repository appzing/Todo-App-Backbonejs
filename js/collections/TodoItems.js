define([
	'underscore', 
	'backbone','models/TodoItem'], function(_, Backbone, TodoItem){
	var TodoItems = Backbone.Collection.extend({
		model : TodoItem,

		url: 'http://jsonplaceholder.typicode.com/todos'
	});

	return TodoItems;
});