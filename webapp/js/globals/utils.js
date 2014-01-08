define([], function () {
	window.utils = {};

	utils.name = "utils";

	utils.pageModules = {};

	utils.getPageModules = function getPageModules (context) {
        // find data modules
        var context = context || document,
        modules = context.querySelectorAll('[data-module]'),
        i       = modules.length,
        moduleName;

        function addToPageModules(modName, elem) {
            if(utils.pageModules[modName]) {
                utils.pageModules[modName].push(elem);
            } else {
                utils.pageModules[modName] = [elem];
            }
        }

        while (i--) {
            moduleName = modules[i].getAttribute('data-module');

            if (/,/.test(moduleName)) {
                var arr = moduleName.replace(' ', '').split(',');
                arr.forEach(function(str) {
                    addToPageModules(str, modules[i]);
                }, this)
            } else {
                addToPageModules(moduleName, modules[i]);
            }            
        }
    };

	utils.elFinder = function elFinder (args) {
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
	};

	utils.indexFinder = function indexFinder (args) {
		var len = args.array.length;
		while (len--) {
			if (args.array[len] === args.el) {
				return len;
			}
		}
	};

	utils.prefixFinder = function prefixFinder () {
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
	};

	utils.addClass = function addClass (el, newClass) {
		var curClasses = el.getAttribute('class');
		if (curClasses.length > 0) {
			curClasses += (' ' + newClass);
		}
		el.setAttribute('class', curClasses)
		return el;
	};

	utils.hasClass = function hasClass (el, className) {
		var curClasses = el.getAttribute('class'),
			reg = new RegExp(className, 'i');
		if (curClasses === null) { return false; }
		if (reg.test(curClasses)) {
			return true
		}
	}

	utils.transition = function transition() {
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

	return utils;
})