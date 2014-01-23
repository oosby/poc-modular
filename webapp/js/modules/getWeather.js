define(['utilities', 'jquery', 'vendor/handlebars-v1.3.0', 'vendor/handlebars.helpers', 'text!templates/tile.tmpl', 'text!templates/header.tmpl'], function(utils, $, Handlebars, helpers, tileSource, headerSource) {
	
    var el = document.getElementsByTagName('section')[0]
    	, h1 = document.getElementsByTagName('h1')[0]
        , Mod = Object.create(utils.pMod)
        , tileTemplate = Handlebars.compile(tileSource)
        , headerTemplate = Handlebars.compile(headerSource);

    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=tokyo&cnt=10&mode=json&units=imperial', function(data) {
        console.dir(data)
        var forecasts = tileTemplate(data)
        	, header = headerTemplate(data.city);

        el.innerHTML = forecasts;
        h1.innerHTML = header;

        var els = el.querySelectorAll('[data-module]');

        // TODO abstract this out
        [].forEach.call(els, function(el) {
        	var mod = el.getAttribute('data-module');
        	if (_modularNS.utils.siteModules[mod]) {
        		utils.createModule(mod, {'el': el});
        	} else {
        		require('modules/'+mod);
        	}
        	
        }, this);
        
    });
});