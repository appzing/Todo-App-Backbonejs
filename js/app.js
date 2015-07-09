define([
	'jquery',
	'underscore', 
	'backbone',
	 'collections/TodoItems',
	 'views/TodoItemsView'], function($,_, Backbone, TodoItems, TodoItemsView ){

	 var initialize = function(){
	 	var todoItems = new TodoItems();
		todoItems.fetch();
		window.TodoItemsView = TodoItemsView;
		var todoItemsView = new TodoItemsView({collection: todoItems});
		$('body').append(todoItemsView.render().$el);

	 };

	 return {
	 	initialize: initialize
	 };	
	
});
