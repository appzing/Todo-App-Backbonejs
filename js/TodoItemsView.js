var TodoItemsView = Backbone.View.extend({
	
	id:'todoItemsViewContainer', 
	
	events:{
		'click #add': 'onClickAdd',
		'keypress #newTodoItem': 'onKeyPress'
	},

	initialize: function(options){
		if(!(options && options.collection)){
			throw new Error("Collection is not specified");
		}

		this.collection.on('add', this.onAddTodoItem, this);
		this.collection.on('remove', this.onRemoveTodoItem, this);

	},
	onRemoveTodoItem: function(todoItem){
		this.$('li#' + todoItem.id).remove();
	},
	onAddTodoItem: function(newTodoItem){
		var view = new TodoItemView({model:newTodoItem });
		this.$('#todoItems').append(view.render().$el);
	},
	onKeyPress: function(e){
		if (e.keyCode == 13)
		{
			var $textBox = this.$('#newTodoItem');

			if($textBox.val()){
			var todoItem = new TodoItem({title : $textBox.val()});
			this.collection.create(todoItem);
			$textBox.val('');
			}
		}
	},

	render:function() {


		var source = $('#addNewItemTemplate').html();
		var template = Handlebars.compile(source); 
		
		this.$el.html(template);

		//var self = this;

		//this.$el.append('<input type="text" autofocus id="newTodoItem"><button id="add">Add</button>');

		// this.collection.each(function(todoItem){		
		// 	var view = new TodoItemView({model : todoItem});
		// 	self.$el.append(view.render().$el);
		// });

		return this;
	}
});