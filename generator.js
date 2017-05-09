const Generator = require('yeoman-generator');
const { List, Input } = require('webpack-addons');
const createDevConfig = require('./dev-config');

module.exports = class WebpackGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    opts.env.configuration = {
      dev: {
        webpackOptions: {}
      }
    };
  }

  prompting() {
    return this.prompt([
      Input('entry', 'What is the entry point in your app?')
    ]).then(answer => {
      this.options.env.configuration.dev.webpackOptions = createDevConfig(
        answer
      );
    });
  }
};
