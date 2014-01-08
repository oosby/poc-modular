{
    appDir: '../webapp',
    baseUrl: 'js',
    dir: '../webapp-built',
    mainConfigFile: '../webapp/js/common.js',
    
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
        },

        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude 
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "modules/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //require in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: 'home',
            exclude: ['common']
        },

        {
            //module names are relative to baseUrl
            name: 'video',
            exclude: ['common']
        }
    ],

    paths: {
        'utilities': 'globals/utils',
        'jquery': "empty:"
    },
    optimize: "none"
}
