const chainWebpack = config => {
    config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
};

module.export = {
    publicPath: "/admin/",
    chainWebpack,
    devServer: {
        historyApiFallback: true
    }
};
