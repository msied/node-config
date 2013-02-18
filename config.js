module.exports = function(app, express){

	app.configure(function(){
		app.set('port', 8081);
		app.set('views', __dirname + '/views');
		app.set('view engine', 'jade');
		app.use(express.bodyParser());
		app.use(express.cookieParser());
		app.use(express.session({
			secret: 'eyeofsauron'
		}));
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/public'));
		app.use(app.router);
		//app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
	});

	app.configure('development', function(){
		app.use(express.errorHandler());
	});

}