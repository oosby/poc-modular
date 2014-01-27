(function () {
	require.config({
	    baseUrl: '../',
	    paths: {
	    	'src': '../js',
	    	'spec': 'testing/spec'
	    }
	});

	require(['spec/ModInherit'], function () {
    })
	
}());


