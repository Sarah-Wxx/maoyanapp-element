// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {}
  // }
   'postcss-import': {
    resolve(id) {
      if (id.charAt(0) == '~') {
        return id.substr(1)
      } else {
        return id
      }
    }
  }
}
