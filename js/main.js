require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		handlebars: 'lib/handlebars-v3.0.3'
	}
});

define(['app'], function(App){
	App.initialize();
});