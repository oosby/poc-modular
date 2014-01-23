(function () {
	require.config({
	    baseUrl: 'js',
	    paths: {
	    	'utilities': 'globals/utils',
	    	'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
	    	'modernizr': 'vendor/modernizr.min',
	    	'text': 'vendor/text'
	    },
	    shim: {
	    	'vendor/handlebars-v1.3.0': {
	    		exports: 'Handlebars'
	    	}, 
	    	'vendor/handlebars.helpers' : {
	    		deps: ['vendor/handlebars-v1.3.0'],
	    		exports: 'Helpers'
	    	}
	    }
	});

	require(['modernizr', 'vendor/domReady!','common'], function (m, doc) {
            // the startmodule is defined on the same script tag of data-main.
            // example: <script data-main="main.js" data-start="pagemodule/main" src="vendor/require.js"/>
            var tag = document.querySelector('[data-start]')
            	, startModuleName = (tag) ? tag.getAttribute('data-start') : null

            if (startModuleName) {
                require([startModuleName]);
            }
     })
	
}());


