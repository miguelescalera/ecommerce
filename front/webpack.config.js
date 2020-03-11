module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
      filename: "bundle.js",
      path: __dirname + '/../back/public'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    context: __dirname,
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: [
              "@babel/preset-react",
              "@babel/env"
            ]
          }
        },
        {
          test: /\.(mov|mp4)$/,
          use: [    
            {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }  
          }]
        },
        {
          test: /\.css$/i,
          use: [
          {
            loader: 'style-loader',
            options: {
              modules: true,
            },
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },],
          modules : true
        },
      ]
    },
    
    
    devtool: 'source-map'
  }