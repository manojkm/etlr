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
          debugInfo: true,
          logConnections: true,
          notify: true,
          port:'<%= site.dev_port %>',
          proxy: "http://localhost/<%= site.proj_dir %>/<%= site.env_root %>",
          ghostMode: {
            scroll: true,
            links: true,
            forms: true
          }

       
        }
    },
};
