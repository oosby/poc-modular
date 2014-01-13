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

	require(['modernizr', 'vendor/domReady!', 'globals/mainnav', 'globals/subnav', 'common'], function (m, doc) {
            // the startmodule is defined on the same script tag of data-main.
            // example: <script data-main="main.js" data-start="pagemodule/main" src="vendor/require.js"/>
            var tag = document.querySelector('[data-start]')
            	, startModuleName = (tag) ? tag.getAttribute('data-start') : null

            if (startModuleName) {
                require([startModuleName]);
            }
     })
	
}());


