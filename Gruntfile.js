module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		 sass: {
			 options: {
				 sourceMap: true
			 },
			 dist: {
				 files: {
					 'css/main.css': 'css/main.scss'
				 }
			 }
		 },
		 watch: {
			 options: {
				 livereload: true,
			 },
			 css: {
				 files: ['css/main.scss'],
				 tasks: ['sass'],
			 },
		 },
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'watch']);

 };