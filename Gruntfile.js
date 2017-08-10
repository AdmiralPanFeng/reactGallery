/**
 * Created by liheng at 2017.8.1
 */
module.exports = function (grunt) {
    var config = {
        sftp: {
            'www.giggle.xin': {
                files: {
                    './': [
                        'build/**',
                    ]
                },
                options: {
                    path:'/opt/lampp/htdocs/www.giggle.xin',
                    host: '60.205.182.93',
                    username: 'root',
                    password: 'GUOwei1016.',
                    port: 22,
                    showProgress: true,
                    createDirectories: true,
                    srcBasePath: './'
                }
            }
        }
    };
    grunt.initConfig(config);
    grunt.loadNpmTasks('grunt-ssh');
    grunt.registerTask('uploadtods', ['sftp:www.giggle.xin']);
}