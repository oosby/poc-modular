define(['utilities'], function() {
	/**
        ##Vars
        els: nodelist of modules to be passed into instances
        Mod: inherit from global pMod
    */
    var els = document.querySelectorAll('[data-module="modules/carousel"]')
        , Mod = Object.create(utils.pMod);

    /**
        ##Mod.Carousel worker bee object with reusable methods
    */
    Mod.Carousel = {
        /**
            ###getPage show page on pagination dot click
            @param {object} $el takes a jquery element
        */
        blankMethod: function blankMethod (options) {
        	console.log('%cblankMethod %o|d|s', 'color:hotpink', this, options);
        },	
        /**
            ###start
            @param {object} options
        */
        start: function start (options) {
            // cache this
            var that = this
                , options = options || {};
            this.blankMethod(options);
        }
    };

    // name this module
    Object.defineProperty(Mod.Carousel, 'name', {
        value: 'Carousel',
        writable: false  
    });

    /**
        ##Mod.init create "instances" of Carousel
        @param {object} Object to create new "instances" from
        @param {object} nodelist to loop through and create "instances"
        @param {string} [optional] name of callback method to fire 
        for each "instance"
    */
    Mod.init(Mod.Carousel, els, 'start')
})