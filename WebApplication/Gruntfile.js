module.exports = function( grunt ) {

    // Configure tasks
    grunt.initConfig( {

    requirejs: {
        compile: {
            options: {
                name                    : "main",
                baseUrl                 : "src/js/",
                mainConfigFile          : "src/js/main.js",
                out                     : "src/js/main.min.js",
                deps                    : [ '../../bower_components/requirejs/require' ],
                optimize                : "none",
                preserveLicenseComments : false,
                generateSourceMaps      : false
            }
        }
        },

    uglify : {
            dist: {
                src  : [ 'src/js/main.min.js' ],
                dest : 'src/js/main.min.js'
            }
    }

    } );

    // Load tasks from the node_modules folder
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    // define tasks list
    grunt.registerTask('default', [ 'requirejs', 'uglify' ] );
    grunt.registerTask('require', [ 'require' ] );
}
