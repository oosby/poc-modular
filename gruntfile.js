module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				files: {'./webapp/styles/main.css': './webapp/styles/main.scss'},
				options: {
					sourcemap: true,
					compass: true
				}
			},
			dist: {
				files: {'./webapp-built/styles/main.css': './webapp-built/styles/main.scss'},
				options: {
					sourcemap: true,
					compass: true
				}
			}
		},
		watch: {
			css: {
				files: 'webapp/styles/*.scss',
				tasks: ['sass:dev'],
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
					modules: [
				        {
				            name: 'main',
				        },
				        {
				            //module names are relative to baseUrl
				            name: 'weather',
				            exclude: ['main']
				        }
				    ]
				}
			}
		}
	});

	// load plugins and tasks
	grunt.registerTask('build', ['sass:dist', 'requirejs']);
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};