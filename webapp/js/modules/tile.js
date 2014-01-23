define(['utilities', 'modules/getWeather'], function(utils) {
	/**
        ##Vars
        els: nodelist of modules to be passed into instances
        Mod: inherit from global pMod
    */
    var els = document.querySelectorAll('[data-module="tile"]') || []
        , Mod = Object.create(utils.pMod);
    /**
        ##Mod.tile worker bee object with reusable methods
    */
    Mod.tile = {
        /**
            ###getPage show page on pagination dot click
            @param {object} $el takes a jquery element
        */
        flip: function flip () {

        	if (this.state) {
                $('.card', this.el).removeClass('flipped');
            } else {
                $('.card',this.el).addClass('flipped');
            }
            this.state = !this.state;
        },
        /**
            ###start
            @param {object} options
        */
        start: function start (options) {
            // cache this
            var that = this
                , options = options || {};

            this.el = options.el;
            this.state = false;

            $(this.el).on('click', function(evt) {
                that.flip();
            });
        }
    };

    // name this module
    Object.defineProperty(Mod.tile, 'name', {
        value: 'tile',
        writable: false  
    });

    /**
        ##Mod.init create "instances" of tile
        @param {object} Object to create new "instances" from
        @param {object} nodelist to loop through and create "instances"
        @param {string} [optional] name of callback method to fire 
        for each "instance"
    */
    Mod.init(Mod.tile, els, 'start', {key : 'value'})
})