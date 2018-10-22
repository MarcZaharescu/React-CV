const path = require('path')
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, '/src/client/index.js'), // Abosolute path to our entry file
  output: { // our output configuration
    path: path.join(__dirname, '/src/public/'), // output path (directory/folder)
    filename: 'bundle.js' // output bundled file name
  },
  module: { // define our loaders here
    // array of rules to handle different file types
    rules: [
      {
        test: /\.(js|jsx)$/, // check for .js and .jsx files (uses Regex)
        loader: 'babel-loader', // use this loader for .js and .jsx files found
        query:
          {
            presets:['react']
          }
      },
      {
        // check for files ending with  .css (uses Regex)
        test: /(\.css|\.scss)$/,
         // use these loaders of .css files. 'css-loader gets run first and is
         // used to handle the imports of our css files inside our jsx files.
         // The style loader then mounts our css in to the DOM
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    },
                },
            ]
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  // set the file extensions we want webpack to resolve
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Provide the plugins
  plugins:[
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
]
};

module.exports = config;
