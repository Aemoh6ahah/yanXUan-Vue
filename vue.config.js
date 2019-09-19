module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 75
                    })
                ]
            }
        }
    },
    devServer: {
        // proxy:'http://m.you.163.com',
        proxy: {
            '/api': {
                target: 'http://m.you.163.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '', // rewrite path
                },
            },


        }
    }
}