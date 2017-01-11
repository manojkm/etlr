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
          proxy: "http://localhost/<foldername>/app/environment/",
          ghostMode: {
            scroll: true,
            links: true,
            forms: true
          }

       
        }
    },
};
