const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    // Enable sourcemaps for debugging webpack's output.
    // devtool: 'cheap-module-eval-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.gql', '.graphql'],
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.(js|mjs)$/,
                loader: 'source-map-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'

        }),
    ],
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/img': {
                target: 'http://localhost:9090',
                secure: false
            }
        }
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        // 'prop-types': 'prop-types',
    },
}
