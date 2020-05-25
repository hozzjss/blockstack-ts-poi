module.exports = {
  entry: [
    'src/registerServiceWorker',
    'src/index.tsx'
  ],
  output: {
    publicUrl: '/'
  },
  plugins: [
    {
      resolve: '@poi/plugin-typescript'
    },
    {
      resolve: '@poi/plugin-pwa'
    }
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*'
    }
  }
}