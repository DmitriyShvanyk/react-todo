const presets = [
  [
    "@babel/preset-react",
    {      
      targets: { // browser versions to support
        edge: "15",
        ie: "11",
        firefox: "60",
        chrome: "64",
        safari: "11.1"
      },
      useBuiltIns: "usage", // this setting is babel-polyfill, if it is worth using, then polyphiles for browser versions mentioned above will be supported.
      corejs: "3.0.0", // explicitly affix the version of corejs
      "targets": { // specify goals for polyphiles
        "esmodules": true, // es modules 
        "ie": "11" // Internet Explorer 11
      }
    },
  ],
];

module.exports = { presets };