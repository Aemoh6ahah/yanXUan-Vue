const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
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
    },
    configureWebpack:{
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
            }
        },
}
}