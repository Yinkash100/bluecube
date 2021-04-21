module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/scss/main.scss";
        `
      }
    }
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         'vue-style-loader',
  //         'css-loader',
  //         'sass-loader'
  //       ]
  //     }
  //   ]
  // }
};
