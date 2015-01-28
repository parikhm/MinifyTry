module.exports = function(grunt){

    grunt.initConfig({
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                report: 'min',
                mangle: true
            },
            js: {
                files: {
                    'src/main/webapp/js/script.min.js': ['src/main/webapp/js/script.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'src/main/webapp/js/libs/angular.js',
                    'src/main/webapp/js/app.js'
                ],
                dest: 'src/main/webapp/js/script.js'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'src/main/webapp/styles/styles.min.css': ['src/main/webapp/styles/libs/*.css', 'src/main/webapp/styles/styles.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('minifyall', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('hello',function(){
       console.log("Mother Nature !!!!");
    });

};