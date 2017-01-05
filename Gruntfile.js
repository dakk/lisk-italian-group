module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            task: {
                src: ['index.html']
            },
            options: {}
        },
        watch: {
            bower: {
                files: ['bower_components/*'],
                tasks: ['wiredep']
            },
            css: {
                files: './style/*.styl',
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
        },
        copy: {
            main: {
                files: [
                    {   expand: true, src: ['./bower_components/**'], dest: 'docs/' },
                    {   expand: true, src: ['./js/**'], dest: 'docs/' },
                    {   expand: true, src: ['./data/**'], dest: 'docs/' },
                    {   expand: true, src: ['./index.html'], dest: 'docs/' },
                    {   expand: true, src: ['./style/*.css', '!./style/*.styl'], dest: 'docs/' }
                    {   expand: true, src: ['./img/**'], dest: 'docs/' },
                ]
            }
        },
        stylus: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    'style/main.css': ['style/*.styl']
                }
            }
        }
    })
    grunt.registerTask('default', ['wiredep', 'stylus', 'watch']);
    grunt.registerTask('build', ['stylus', 'copy']);
}