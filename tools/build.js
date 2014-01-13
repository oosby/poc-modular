{
    appDir: '../webapp',
    baseUrl: 'js',
    dir: '../webapp-built',
    mainConfigFile: '../webapp/js/main.js',
    
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'main',
        },
        {
            //module names are relative to baseUrl
            name: 'video',
            exclude: ['main']
        }
    ],

    paths: {
        'utilities': 'globals/utils',
        'jquery': "empty:"
    },
    optimize: "none"
}
