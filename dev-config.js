module.exports = answer => {
  const entryProp = answer.entry ? "'" + answer.entry + "'" : "'index.js'";

  return {
    entry: entryProp,
    output: {
      filename: "'build/[name].js'"
    },
    context: 'path.join(__dirname, "src")',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "'babel-loader'",
          options: {
            presets: ["'es2015'", "'react'"]
          }
        }
      ]
    },
    resolve: {
      extensions: ["'.js'", "'.jsx'"]
    }
  };
};
