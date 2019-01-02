module.exports = function(grunt) {

    grunt.initConfig({
       'sftp-deploy': {
            deploy: {
                auth: {
                    host: '192.168.1.110',
                    port: 22,
                    authKey: "secret.json"
                },
                cache: 'sftpCache.json',
                src: '.',
                dest: '/var/www/test.com/public_html/project',  // this is on the remote host
                exclusions: [],
                serverSep: '/',
                concurrency: 4,
                progress: true
            }
   }
});

grunt.loadNpmTasks('grunt-sftp-deploy');

};

