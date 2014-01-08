(function () {
	require.config({
	    baseUrl: 'js',
	    paths: {
	    	'utilities': 'globals/utils',
	    	"jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
	    }
	});

	require(['home']);
}())


