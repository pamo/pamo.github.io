module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	jekyll: {
    		build : {
    			dest: '_site'
    		}
    	},

    	sass: {
    		dist: {
    			files: {
    				'assets/css/screen.css': 'assets/scss/screen.scss'
    			}
    		}
    	},

    	watch: {
    		sass: {
    			files: 'assets/scss/**/*.scss',
    			tasks: ['sass']
    		},
    		jekyll: {
    			files: [
    			'**',
    			'_layouts/*.html',
    			'_includes/*.md',
    			'assets/css/screen.css',
    			'!_site/**',
    			'!node_modules/**',
    			'!.sass-cache/**',
    			'!Gruntfile.js',
    			'!package.json',
    			'!.git/**'
    			],
    			tasks: ['jekyll']
    		}
    	}
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'watch']);
};