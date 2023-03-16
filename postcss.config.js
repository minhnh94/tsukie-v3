module.exports = {
  plugins: {
    'postcss-import': {}, // need this so that we can organize typography.css separately and still take advantage of predefined classes in utility-patterns.scss
    tailwindcss: {},
    autoprefixer: {},
  },
}
