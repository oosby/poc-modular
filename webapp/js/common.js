(function () {
	require.config({
	    baseUrl: 'js',
	    paths: {
	    	'utilities': 'globals/utils',
	    	'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
	    	'modernizr': 'vendor/modernizr.min'
	    },
	    shim: {

	    }
	});

	require(['modernizr', 'globals/mainnav', 'globals/subnav']);

	var pathname = window.location.pathname
		, page = pathname.substring((pathname.lastIndexOf('/')+1), pathname.lastIndexOf('.html'));

	switch(page) {
		case 'home':
			require(['home']);
		break;
		case 'video':
			require(['video']);
		break;
		default:
			require(['home']);
	}
	
}());


