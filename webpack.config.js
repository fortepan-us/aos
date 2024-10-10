const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = [
    {
        entry: "./src/js/aos.js",
        devtool: process.env.NODE_ENV === "production" ? false : "eval",
        output: {
            filename: "aos.js",
            globalObject: "this",
            library: {
                type: "module",
            },
            path: path.resolve(
                __dirname,
                "./dist",
            ),
        },
        experiments: {
            outputModule: true,
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css|sass)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: process.env.NODE_ENV === "production",
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: process.env.NODE_ENV === "production",
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "aos.css",
            }),
        ],
    },
]
