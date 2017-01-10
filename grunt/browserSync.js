module.exports = {
    dev: {

        bsFiles: {
            src: [
                
                '<%= site.env %>/css/*.css',
                '<%= site.env %>/assets/**',
                '<%= site.env %>/*.php'
            ]
        },

        options: {
            watchTask: true, //Option 'false' will open browser directly without watching grunt tasks.
           
           port: '<%= site.dev_port %>',
            server: {
                baseDir: "<%= site.env_root %>"
            }

            
        }
    },
};
