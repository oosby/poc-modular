module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {'./webapp/styles/main.css': './webapp/styles/main.scss'},
				options: {
					sourcemap: true,
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
			compile: {
				options: {
					appDir: 'webapp/',
					baseUrl: 'js',
					mainConfigFile: 'webapp/js/main.js',
					dir: 'webapp-built',
					optimize: 'none',
					modules: [
				        {
				            name: 'main',
				        },
				        {
				            //module names are relative to baseUrl
				            name: 'video',
				        }
				    ]
				}
			}
		}
	});

	// load plugins and tasks
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};