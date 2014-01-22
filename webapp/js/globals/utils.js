define([], function () {
	var _modularNS = {};

	_modularNS.utils = {
		siteModules : {},

		pMod : {
	        init: function (Obj, els, cb, options) {
	            options = options || {};

	            if (els) {
	                [].forEach.call(els, function(el, idx) {
	                    var tmp = Object.create(Obj);
	                    options.el = el;
	                    if (cb) {
	                        tmp[cb](options);
	                    }
	                    
	                }, this);
	           }
	            
	            // add this module to siteModules{}
	            _modularNS.utils.siteModules[Obj.name] = {'object': Obj, 'startFn' : cb || null};
	        }
	    },

	    createModule : function createModule(moduleName, options) {
	        var tmp = Object.create(this.siteModules[moduleName].object)
	            , cb = this.siteModules[moduleName].startFn
	            , options = options || {};

	        if (cb) {
	           tmp[cb](options);
	        }
	        return tmp;
	    },

		elFinder : function elFinder (args) {
			var el = args.el,
				elNode = args.elNode.toLowerCase(),
				elParent,
				elSearch = (function elSearch(el) {
					if (el.nodeName !== 'BODY') {
						if (el.nodeName.toLowerCase() === elNode) {
							elParent = el;
						} else {
							elSearch(el.parentElement);
						}
					}
				})(el);
				return elParent
		},

		prefixFinder : function prefixFinder () {
			var agent = window.navigator.userAgent,
				arrayBrowser = ['webkit', 'firefox', 'opera'],
				len = arrayBrowser.length,
				reg,
				prefix;

			while(len--) {
				reg = new RegExp(arrayBrowser[len], 'i');
				if (reg.test(agent)) {
					prefix = arrayBrowser[len]
				}
			}
			
			switch(prefix) {
				case 'webkit' : 
					prefix = 'webkit';
				break;

				case 'firefox' :
					prefix = 'Moz';
				break;

				case 'opera' :
					prefix = 'o';
				break;
			}
			window.prefix = prefix;
		},

		transition : function transition() {
	        var transitionEnd = (function() {
	            var el = document.createElement('bootstrap')
	                , transEndEventNames = {
	                    'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd otransitionend', 'transition': 'transitionend'
	                }
	                , name
	                , ret;

	            for (name in transEndEventNames) {
	                if (el.style[name] !== undefined) {
	                    ret = transEndEventNames[name];
	                }
	            }

	            return ret;

	        }())

	        utils.transitionend = transitionEnd;
	    }
	};

	return _modularNS.utils;
})