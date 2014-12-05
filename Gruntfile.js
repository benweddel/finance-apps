module.exports = function(grunt) {

         // Project configuration.
         grunt.initConfig({
             pkg: grunt.file.readJSON('package.json'),
             sass: {                              // Task
               dist: {                            // Target
                 options: {                       // Target options
                   style: 'expanded'
                 },
                 files: {                         // Dictionary of files
                   'styles/style.css': 'styles/style.scss' // 'destination': 'source'
                 }
               }
             },
             watch: {
               css: {
                 files: '**/*.scss',
                 tasks: ['sass'],
                 options: {
                   livereload: true,
                 },
               },
             }
         });

         // Default task(s).
         grunt.loadNpmTasks('grunt-contrib-sass');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default', ['sass','watch']);
 };