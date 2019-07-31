const chainWebpack = config => {
    config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
};

module.exports = {
    publicPath: "/admin/",
    chainWebpack,
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^.*/, to: '/admin/index.html'}
            ]
        }
    }
};
