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
            }
        },
        copy: {
            main: {
                files: [
                    {   expand: true, src: ['./bower_components/**'], dest: 'docs/' },
                    {   expand: true, src: ['./js/**'], dest: 'docs/' },
                    {   expand: true, src: ['./data/**'], dest: 'docs/' },
                    {   expand: true, src: ['./index.html'], dest: 'docs/' },
                ]
            }
        }
    })
    grunt.registerTask('default', ['wiredep', 'watch']);
    grunt.registerTask('build', ['copy']);
}