const path = require('path')

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = path.join(__dirname, 'server', 'index.ts')

    config.resolve = {
      extensions: ['.ts', '.js', '.json']
    }

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader'
    })

    return config
  }
}
