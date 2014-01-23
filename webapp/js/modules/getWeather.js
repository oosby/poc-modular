define(['utilities'
    , 'jquery'
    , 'vendor/handlebars-v1.3.0'
    , 'vendor/handlebars.helpers'
    , 'text!templates/tile.tmpl'
    , 'text!templates/header.tmpl'], 
    function(utils, $, Handlebars, helpers, tileSource, headerSource) {

    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
        , params = '&cnt=10&mode=json&units=imperial'
        , cityList = document.querySelector('.city-list')
        , city = 'q=' + cityList.options[cityList.selectedIndex].value + params
        , el = document.getElementsByTagName('section')[0]
    	, h1 = document.getElementsByTagName('h1')[0]
        , Mod = Object.create(utils.pMod)
        , tileTemplate = Handlebars.compile(tileSource)
        , headerTemplate = Handlebars.compile(headerSource);

    function getTheWeather() {
        $.get(url + city + params, function(data) {
            console.dir(data)
            var forecasts = tileTemplate(data)
                , header = headerTemplate(data.city);

            el.innerHTML = forecasts;
            h1.innerHTML = header;

            utils.lazyModuleInit(el);
        });
    }

    $(cityList).on('change', function(evt) {
        city = 'q=' + cityList.options[cityList.selectedIndex].value + params;
        getTheWeather();
    });

    getTheWeather();
});