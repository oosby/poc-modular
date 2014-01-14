module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {'./webapp/styles/main.css': './webapp/styles/main.scss'},
				options: {
					// sourcemap: true,
					compass: true
				}
			}
		},
		watch: {
			css: {
				files: 'webapp/styles/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
		},
		requirejs: {
			dist: {
		        options: {
		            baseUrl: './webapp/js',
				    name: 'vendor/almond',
				    include: ['main'],
				    paths: {
				    	'utilities': 'globals/utils',
				    	'jquery': 'globals/jqwrapper',
				    	'modernizr': 'vendor/modernizr.min'
				    },
				    insertRequire: ['main'],
				    out: './webapp-built/js/main-built.js',
				    wrap: true,
				    optimize: 'none'
		        }
		    }
		}
	});

	grunt.registerTask('build', ['requirejs:dist']);

	// load plugins and tasks
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};