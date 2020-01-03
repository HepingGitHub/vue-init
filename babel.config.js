module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "style": true,
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}