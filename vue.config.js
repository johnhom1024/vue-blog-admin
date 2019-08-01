/**
 * @description: vue配置文件
 * @since: 2019-07-31 20:23:23
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-07-31 23:26:09
 */

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    publicPath: "/admin/",
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /^.*/, to: "/admin/index.html" }]
        }
    },
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        ]
    }
};
