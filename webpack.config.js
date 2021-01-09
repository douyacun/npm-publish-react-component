const path = require('path');

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    performance: {
        hints: "warning", // 枚举
        hints: "error", // 性能提示中抛出错误
        hints: false, // 关闭性能提示
        maxAssetSize: 200000, // 整数类型（以字节为单位）
        maxEntrypointSize: 400000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
}