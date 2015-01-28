module.exports = function (grunt) {

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
        },
        watch: {
            js: {
                files: ['**/**.js','!**/**.min.js'],
                tasks: ['concat', 'uglify']
            },
            styles: {
                files: ['**/**.css','!**/**.min.css'],
                tasks: ['cssmin']
            }
        },
        imagemin: {
            dynamic: {
                options:{
                    optimizationLevel: 4
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/main/webapp/images/original',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'src/main/webapp/images'                  // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('minifyall', ['concat', 'uglify', 'cssmin','imagemin']);
    grunt.registerTask('hello', function () {
        console.log("Mother Nature !!!!");
    });

};