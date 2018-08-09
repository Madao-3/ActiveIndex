var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/active_index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'active_index.js',
  },
};